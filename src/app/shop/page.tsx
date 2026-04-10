"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { ProductCard } from "@/components/ui/product-card";
import { motion } from "framer-motion";
import { cn } from "@/components/ui/button";
import { PRODUCTS, CATEGORIES, getCategoryColor } from "@/data/products";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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
            <PageHeader
                tag="Research Catalog"
                heading={<>All <span className="text-accent italic font-serif">Compounds</span></>}
                subheading="Browse our full catalog of research peptides, blends, and bioactive compounds. Every product is third-party tested for purity."
            />

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
