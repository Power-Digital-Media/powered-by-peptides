import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/ui/cart-drawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Powered by Peptides | Premium Research Compounds",
  description: "High-purity research peptides, GLP-1 receptor agonist compounds, and bioactive peptides for qualified researchers. 99.86% purity. For research use only.",
  metadataBase: new URL("https://poweredbypeptides.com"),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://poweredbypeptides.com/#organization",
  name: "Powered by Peptides",
  url: "https://poweredbypeptides.com",
  logo: "https://poweredbypeptides.com/images/Logo_Alpha.webp",
  description: "Premium research peptides and bioactive compounds for qualified researchers. Third-party tested for purity.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@poweredbypeptides.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://poweredbypeptides.com/#website",
  name: "Powered by Peptides",
  url: "https://poweredbypeptides.com",
  publisher: { "@id": "https://poweredbypeptides.com/#organization" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <CartProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

