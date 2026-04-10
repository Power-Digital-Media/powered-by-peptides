# Syringe Society — Fulfillment Architecture

> **Last Updated:** 2026-04-06
> **Status:** Planned — awaiting supplier confirmation on blind shipping

---

## Order Flow

```
┌──────────────────┐
│   BUYER           │
│   SyringeSociety  │
│   .com            │
└────────┬─────────┘
         │ 1. Adds to cart, clicks checkout
         ▼
┌──────────────────┐
│   STRIPE          │
│   Checkout        │
│   (your account)  │
│   Shows YOUR      │
│   retail price    │
└────────┬─────────┘
         │ 2. Payment succeeds
         ▼
┌──────────────────┐
│   STRIPE WEBHOOK  │
│   checkout.       │
│   session.        │
│   completed       │
└────────┬─────────┘
         │ 3. Fires to your API
         ▼
┌──────────────────┐
│   YOUR API        │
│   /api/webhooks/  │
│   stripe          │
└────────┬─────────┘
         │ 4. Processes order
         ├──────────────────────────┐
         ▼                          ▼
┌──────────────────┐    ┌──────────────────┐
│   BUYER EMAIL     │    │   SUPPLIER        │
│   Order confirm   │    │   NOTIFICATION    │
│   YOUR brand      │    │                   │
│   YOUR price      │    │   Shipping info   │
│   YOUR receipt    │    │   + SKUs ONLY     │
│                   │    │   ❌ No retail     │
│                   │    │      price        │
│                   │    │   ❌ No buyer     │
│                   │    │      contact      │
└──────────────────┘    └────────┬─────────┘
                                  │ 5. Supplier fulfills
                                  ▼
                        ┌──────────────────┐
                        │   BLIND SHIPMENT  │
                        │   No invoice      │
                        │   No packing slip │
                        │   (or YOUR branded│
                        │   packing slip)   │
                        └────────┬─────────┘
                                  │ 6. Delivered
                                  ▼
                        ┌──────────────────┐
                        │   BUYER receives  │
                        │   Only evidence:  │
                        │   Stripe email    │
                        │   receipt (YOUR   │
                        │   retail price)   │
                        └──────────────────┘
```

---

## What the Buyer Sees
- Website: SyringeSociety.com with YOUR retail prices
- Checkout: Stripe hosted checkout with YOUR merchant name
- Email: Confirmation from YOUR domain with YOUR prices
- Package: Product only, no invoice (blind ship)

## What the Supplier Sees
- Order notification with: customer name, shipping address, SKU, quantity
- Does NOT see: retail price, buyer email, buyer phone
- Ships to customer address directly

## What Nobody Sees
- The margin between supplier cost and retail price
- The supplier's identity (no branding in package)
- The connection between SyringeSociety and Evolve BioPep

---

## Technical Implementation (Planned)

### Phase 1: Manual (MVP)
- Stripe checkout integrated into site
- Webhook saves order to database (Firebase/Supabase)
- Auto-email to YOUR INBOX with order details
- You manually forward order to supplier
- Fastest to deploy, fine for first 50-100 orders

### Phase 2: Semi-Automated
- Webhook auto-generates formatted email to supplier
- Template: "New order — Ship to [name] at [address] — Items: [SKUs]"
- Buyer gets branded confirmation email automatically
- Admin dashboard shows order status

### Phase 3: Fully Automated
- WooCommerce REST API integration (if supplier provides keys)
- Or: browser automation to place order on their site
- Auto-tracking number relay to buyer
- Packing slip PDF generation
- Full order lifecycle management

---

## Supplier Notification Template (Email)

```
Subject: New Fulfillment Order — SS-[order_number]

ORDER: SS-[order_number]
DATE: [date]

SHIP TO:
[customer_name]
[address_line_1]
[address_line_2]
[city], [state] [zip]

ITEMS:
- [quantity]x [product_sku] ([product_name])
- [quantity]x [product_sku] ([product_name])

SHIPPING: Standard
PACKING: Blind shipment — NO invoice or packing slip

Please confirm when shipped with tracking number.
Reply to: orders@syringesociety.com
```

---

## Open Items
- [ ] Confirm blind shipping with Evolve BioPep
- [ ] Determine order notification format (email vs API)
- [ ] Set up Stripe account for Syringe Society
- [ ] Build webhook endpoint
- [ ] Create branded confirmation email template
- [ ] Decide on database (Firebase, Supabase, or Postgres)
