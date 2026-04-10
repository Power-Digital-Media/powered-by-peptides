import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { CATEGORIES } from "@/data/products";

export function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="block hover:opacity-80 transition-opacity">
                            <Image
                                src="/images/Logo_Alpha.webp"
                                alt="Powered by Peptides"
                                width={160}
                                height={44}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
                            Premium research peptides and compounds. 99.86% purity.
                            All products are for laboratory research use only.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {['Visa', 'MC', 'Amex', 'CashApp', 'Apple Pay'].map((m) => (
                                <span key={m} className="text-[9px] uppercase tracking-wider text-white/30 border border-white/10 rounded px-2 py-1">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 uppercase text-[10px] tracking-[0.2em] text-accent">Categories</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                            {CATEGORIES.map((cat) => (
                                <li key={cat.slug}>
                                    <Link href={`/shop?category=${cat.slug}`} className="hover:text-accent transition-colors">
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 uppercase text-[10px] tracking-[0.2em] text-accent">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                            <li><Link href="/shop" className="hover:text-accent transition-colors">Shop All</Link></li>
                            <li><Link href="/learn-more" className="hover:text-accent transition-colors">Learn More</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Powered by Peptides. All rights reserved.
                    </p>
                    <p className="text-[10px] text-white/25 max-w-lg text-center md:text-right leading-relaxed">
                        All products are intended solely for laboratory research, analytical testing, and educational purposes.
                        NOT FOR HUMAN CONSUMPTION. Not evaluated by the FDA.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
