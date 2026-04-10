"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";
import { motion } from "framer-motion";
import { cn } from "@/components/ui/button";
import { PRODUCTS, CATEGORIES, getCategoryColor } from "@/data/products";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

function ShopContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "all";
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    const filtered = activeCategory === "all"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
                <button
                    onClick={() => setActiveCategory("all")}
                    className={cn(
                        "px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer",
                        activeCategory === "all"
                            ? "bg-accent text-accent-foreground border-accent"
                            : "bg-transparent text-white/60 border-white/10 hover:border-accent/30 hover:text-white"
                    )}
                >
                    All ({PRODUCTS.length})
                </button>
                {CATEGORIES.map(cat => {
                    const count = PRODUCTS.filter(p => p.category === cat.id).length;
                    return (
                        <button
                            key={cat.slug}
                            onClick={() => setActiveCategory(cat.slug)}
                            className={cn(
                                "px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer",
                                activeCategory === cat.slug
                                    ? "bg-accent text-accent-foreground border-accent"
                                    : "bg-transparent text-white/60 border-white/10 hover:border-accent/30 hover:text-white"
                            )}
                        >
                            {cat.icon} {cat.shortName} ({count})
                        </button>
                    );
                })}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product, i) => {
                    const catName = CATEGORIES.find(c => c.id === product.category)?.shortName || product.category;
                    return (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <ProductCard
                                slug={product.slug}
                                name={product.name}
                                fullName={product.fullName}
                                price={product.price}
                                category={catName}
                                categoryColor={getCategoryColor(product.category)}
                                shortDescription={product.shortDescription}
                                purity={product.purity}
                                quantity={product.quantity}
                                image={product.image}
                                checkoutUrl={product.checkoutUrl}
                                featured={product.featured}
                            />
                        </motion.div>
                    );
                })}
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    <p className="text-lg">No products found in this category.</p>
                </div>
            )}
        </>
    );
}

export default function ShopPage() {
    return (
        <div>
            {/* Cinematic Hero with All Compounds Image */}
            <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end pb-16 md:pb-20 overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/images/products/all-compounds-hero.webp"
                    alt="Powered by Peptides — Full Research Catalog"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Dark overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-[1]" />

                {/* Content */}
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                        className="max-w-2xl space-y-5"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-bold tracking-[0.3em] uppercase text-accent shadow-sm backdrop-blur-sm">
                            Research Catalog
                        </span>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
                            All <span className="text-accent italic font-serif">Compounds</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-lg">
                            Browse our full catalog of research peptides, blends, and bioactive compounds. Every product is third-party tested for purity.
                        </p>
                    </motion.div>
                </Container>
            </section>

            <Section>
                <Container>
                    <Suspense fallback={<div className="text-center py-20 text-muted-foreground">Loading...</div>}>
                        <ShopContent />
                    </Suspense>
                </Container>
            </Section>
        </div>
    );
}
