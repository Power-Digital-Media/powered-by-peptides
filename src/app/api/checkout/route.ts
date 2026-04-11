import { NextRequest, NextResponse } from "next/server";

// ── Stripe Checkout Session API Route ──
// Creates a Stripe Checkout Session from cart items and redirects to Stripe

interface CartItem {
  productId: string;
  slug: string;
  name: string;
  fullName: string;
  price: number;
  quantity: number;
  image?: string;
  productQuantity?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const cartItemsRaw = formData.get("cartItems");

    if (!cartItemsRaw || typeof cartItemsRaw !== "string") {
      return NextResponse.json({ error: "No cart items provided" }, { status: 400 });
    }

    const cartItems: CartItem[] = JSON.parse(cartItemsRaw);

    if (!cartItems.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // ── Check for Stripe key ──
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
      // No Stripe key configured yet — redirect to a placeholder
      console.warn("⚠️ STRIPE_SECRET_KEY not configured. Redirecting to placeholder.");
      const baseUrl = request.nextUrl.origin;
      return NextResponse.redirect(
        `${baseUrl}/checkout-pending?items=${encodeURIComponent(JSON.stringify(cartItems.map(i => ({ name: i.name, qty: i.quantity }))))}`
      );
    }

    // ── Create Stripe Checkout Session ──
    // Using fetch instead of stripe SDK to keep dependencies minimal
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.fullName || item.name,
          ...(item.image && {
            images: [`${request.nextUrl.origin}${item.image}`],
          }),
          metadata: {
            productId: item.productId,
            slug: item.slug,
            ...(item.productQuantity && { productQuantity: item.productQuantity }),
          },
        },
        unit_amount: Math.round(item.price * 100), // Stripe uses cents
      },
      quantity: item.quantity,
    }));

    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "mode": "payment",
        "success_url": `${request.nextUrl.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        "cancel_url": `${request.nextUrl.origin}/shop`,
        // Collect customer details for shipping
        "shipping_address_collection[allowed_countries][0]": "US",
        "phone_number_collection[enabled]": "true",
        "customer_creation": "always",
        ...Object.fromEntries(
          lineItems.flatMap((item, i) => [
            [`line_items[${i}][price_data][currency]`, item.price_data.currency],
            [`line_items[${i}][price_data][product_data][name]`, item.price_data.product_data.name],
            [`line_items[${i}][price_data][unit_amount]`, item.price_data.unit_amount.toString()],
            [`line_items[${i}][quantity]`, item.quantity.toString()],
            ...(item.price_data.product_data.images
              ? [[`line_items[${i}][price_data][product_data][images][0]`, item.price_data.product_data.images[0]]]
              : []),
          ])
        ),
      }),
    });

    const session = await stripeResponse.json();

    if (session.error) {
      console.error("Stripe error:", session.error);
      return NextResponse.json(
        { error: session.error.message || "Stripe checkout failed" },
        { status: 400 }
      );
    }

    // Redirect to Stripe Checkout
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
