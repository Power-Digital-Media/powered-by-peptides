"use client";

import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { Shield, Lock } from "lucide-react";

interface ProductCTAProps {
  productId: string;
  slug: string;
  name: string;
  fullName: string;
  price: number;
  image?: string;
  purity?: string;
  productQuantity?: string;
}

export function ProductCTA({
  productId,
  slug,
  name,
  fullName,
  price,
  image,
  purity,
  productQuantity,
}: ProductCTAProps) {
  return (
    <>
      {/* Price & Add to Cart */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div>
          <span className="text-5xl font-bold tracking-tight">${price.toFixed(0)}</span>
          <span className="text-white/30 text-sm ml-2">USD</span>
        </div>
        <AddToCartButton
          productId={productId}
          slug={slug}
          name={name}
          fullName={fullName}
          price={price}
          image={image}
          purity={purity}
          productQuantity={productQuantity}
          variant="full"
        />
      </div>

      {/* Accepted Payments */}
      <div className="flex items-center gap-3 text-[10px] text-white/30 font-bold tracking-[0.2em] uppercase">
        <Lock className="w-3.5 h-3.5 text-accent/50" />
        Secure Checkout via Stripe — Apple Pay • Google Pay • All Major Cards
      </div>
    </>
  );
}
