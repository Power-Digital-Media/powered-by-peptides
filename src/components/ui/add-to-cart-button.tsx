"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Button } from "./button";
import { ShoppingCart, Check, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AddToCartButtonProps {
  productId: string;
  slug: string;
  name: string;
  fullName: string;
  price: number;
  image?: string;
  purity?: string;
  productQuantity?: string;
  variant?: "full" | "compact";
  className?: string;
}

export function AddToCartButton({
  productId,
  slug,
  name,
  fullName,
  price,
  image,
  purity,
  productQuantity,
  variant = "full",
  className = "",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addItem(
      { productId, slug, name, fullName, price, image, purity, productQuantity },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (variant === "compact") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(
            { productId, slug, name, fullName, price, image, purity, productQuantity },
            1
          );
          setAdded(true);
          setTimeout(() => setAdded(false), 2000);
        }}
        className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase bg-accent/15 hover:bg-accent/25 text-accent px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${className}`}
      >
        <AnimatePresence mode="wait">
          {added ? (
            <motion.span
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-1"
            >
              <Check className="w-3 h-3" /> Added
            </motion.span>
          ) : (
            <motion.span
              key="cart"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-1"
            >
              <ShoppingCart className="w-3 h-3" /> Add to Cart
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    );
  }

  // Full variant — product detail page
  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${className}`}>
      {/* Quantity Selector */}
      <div className="flex items-center gap-0 rounded-full border border-white/10 bg-white/5 overflow-hidden h-14">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="px-4 h-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="text-sm font-bold w-10 text-center">{qty}</span>
        <button
          onClick={() => setQty(qty + 1)}
          className="px-4 h-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Add to Cart Button */}
      <Button
        variant="premium"
        size="lg"
        className="px-12 w-full sm:w-auto"
        onClick={handleAdd}
      >
        <AnimatePresence mode="wait">
          {added ? (
            <motion.span
              key="added"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <Check className="w-5 h-5" /> Added to Cart
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
}
