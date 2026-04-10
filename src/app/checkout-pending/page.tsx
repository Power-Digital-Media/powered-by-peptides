import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Coming Soon | Powered by Peptides",
  description: "Online checkout is being configured. Please contact us to place your order.",
};

export default function CheckoutPendingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] rounded-full bg-accent/8 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] rounded-full bg-yellow-500/5 blur-[120px]" />
      </div>

      <Container className="relative z-10 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
              <Clock className="w-12 h-12 text-yellow-400" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Checkout <span className="text-yellow-400">Coming Soon</span>
            </h1>
            <p className="text-lg text-white/50 max-w-md mx-auto leading-relaxed">
              Our online checkout is being finalized. To place an order now, please contact us directly.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 max-w-md mx-auto space-y-4">
            <Mail className="w-6 h-6 text-accent mx-auto" />
            <p className="text-sm text-white/70">Email us to order:</p>
            <a
              href="mailto:info@poweredbypeptides.com"
              className="text-accent text-lg font-bold hover:underline"
            >
              info@poweredbypeptides.com
            </a>
          </div>

          <Link href="/shop">
            <Button variant="outline" size="lg" className="px-10 mt-4">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Shop
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
