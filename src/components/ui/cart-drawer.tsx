"use client";

import { useCart, type CartItem } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useEffect } from "react";

export function CartDrawer() {
  const { items, itemCount, total, isOpen, closeCart, updateQuantity, removeItem, clearCart } = useCart();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-[#0a0a0f] border-l border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-accent" />
                <h2 className="text-lg font-bold tracking-tight">Your Cart</h2>
                {itemCount > 0 && (
                  <span className="text-xs font-bold bg-accent/15 text-accent px-2.5 py-0.5 rounded-full">
                    {itemCount} {itemCount === 1 ? "item" : "items"}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-white/20" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white/60 mb-2">Your cart is empty</p>
                    <p className="text-sm text-white/30">Browse our research compounds to get started.</p>
                  </div>
                  <Link href="/shop" onClick={closeCart}>
                    <Button variant="outline" size="sm" className="px-6">
                      Browse Shop <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItemRow
                      key={item.productId}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Footer — Totals & Checkout */}
            {items.length > 0 && (
              <div className="border-t border-white/5 p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Subtotal</span>
                  <span className="font-bold text-lg">${total.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <form action="/api/checkout" method="POST">
                  <input type="hidden" name="cartItems" value={JSON.stringify(items)} />
                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full text-base"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Checkout — ${total.toFixed(2)}
                  </Button>
                </form>

                {/* Secure payment badge */}
                <div className="flex items-center justify-center gap-2 text-[10px] text-white/25 font-bold tracking-[0.15em] uppercase">
                  <Lock className="w-3 h-3" />
                  Secure checkout via Stripe • Apple Pay • Google Pay
                </div>

                {/* Clear cart */}
                <button
                  onClick={clearCart}
                  className="text-xs text-white/20 hover:text-red-400 transition-colors w-full text-center py-2"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Individual Cart Item Row ──
function CartItemRow({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: CartItem;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="glass-card rounded-xl p-4 flex gap-4"
    >
      {/* Thumbnail */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-accent/30 text-xs font-bold">
            {item.name.slice(0, 3)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 space-y-1">
        <Link
          href={`/product/${item.slug}`}
          className="text-sm font-semibold text-white/90 hover:text-accent transition-colors block truncate"
        >
          {item.name}
        </Link>
        {item.productQuantity && (
          <span className="text-[10px] text-white/30 font-bold tracking-widest uppercase">
            {item.productQuantity}
          </span>
        )}

        {/* Qty controls + price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">${(item.price * item.quantity).toFixed(0)}</span>
            <button
              onClick={() => onRemove(item.productId)}
              className="p-1.5 text-white/20 hover:text-red-400 transition-colors rounded-full hover:bg-red-400/10"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
