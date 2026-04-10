import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed | Powered by Peptides",
  description: "Thank you for your order. Your research compounds are being prepared for shipment.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] rounded-full bg-accent/8 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] rounded-full bg-green-500/5 blur-[120px]" />
      </div>

      <Container className="relative z-10 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Order <span className="text-green-400">Confirmed</span>
            </h1>
            <p className="text-lg text-white/50 max-w-md mx-auto leading-relaxed">
              Thank you for your purchase. A confirmation email has been sent with your order details.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-8">
            <div className="glass-card rounded-2xl p-6 space-y-2">
              <Mail className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-bold text-white/80">Email Confirmation</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                Check your inbox for order details and tracking information.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-2">
              <Shield className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-bold text-white/80">Secure Processing</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                Your payment was processed securely via Stripe. We never store card details.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/shop">
              <Button variant="premium" size="lg" className="px-10">
                Continue Shopping <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="px-10">
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-[10px] text-white/20 font-bold tracking-[0.2em] uppercase mt-12">
            All products are intended for laboratory research use only
          </p>
        </div>
      </Container>
    </div>
  );
}
