"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "./button";

interface ProductCardProps {
    slug: string;
    name: string;
    fullName?: string;
    price: number;
    category: string;
    categoryColor?: string;
    shortDescription?: string;
    purity?: string;
    quantity?: string;
    image?: string;
    checkoutUrl?: string;
    featured?: boolean;
}

export function ProductCard({
    slug,
    name,
    fullName,
    price,
    category,
    categoryColor = '#00D4FF',
    shortDescription,
    purity,
    quantity,
    image,
    checkoutUrl,
    featured = false,
}: ProductCardProps) {
    return (
        <Link href={`/product/${slug}`}>
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                    "glass-card rounded-[2rem] flex flex-col h-full group cursor-pointer border-white/5 shadow-lg relative overflow-hidden",
                    featured && "glow-blue"
                )}
            >
                {/* Product Image */}
                {image && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src={image}
                            alt={fullName || name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Dark gradient fade into card body */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />

                        {/* Category Badge — floating on image */}
                        <div className="absolute top-4 left-4 z-10">
                            <span
                                className="text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border backdrop-blur-md"
                                style={{
                                    color: categoryColor,
                                    borderColor: `${categoryColor}40`,
                                    backgroundColor: `${categoryColor}15`,
                                }}
                            >
                                {category}
                            </span>
                        </div>

                        {/* Purity badge — top right */}
                        {purity && (
                            <div className="absolute top-4 right-4 z-10">
                                <span className="text-[10px] text-accent font-bold tracking-wider bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
                                    {purity}
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* Card Body */}
                <div className="p-7 pt-4 flex flex-col flex-1">
                    {/* If no image, show badges inline */}
                    {!image && (
                        <div className="flex justify-between items-start mb-6">
                            <span
                                className="text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full border"
                                style={{
                                    color: categoryColor,
                                    borderColor: `${categoryColor}30`,
                                    backgroundColor: `${categoryColor}10`,
                                }}
                            >
                                {category}
                            </span>
                            {purity && (
                                <span className="text-[10px] text-accent font-bold tracking-wider">
                                    {purity}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors">
                            {name}
                        </h3>
                        {fullName && name !== fullName && (
                            <p className="text-[11px] text-white/35 font-medium">{fullName}</p>
                        )}
                        {shortDescription && (
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 opacity-60">
                                {shortDescription}
                            </p>
                        )}
                    </div>

                    {/* Bottom Row */}
                        <div className="flex items-end justify-between mt-6 pt-5 border-t border-white/5">
                            <div>
                                {quantity && (
                                    <span className="text-[10px] text-white/30 font-bold tracking-widest uppercase block mb-1">
                                        {quantity}
                                    </span>
                                )}
                                <span className="text-2xl font-bold tracking-tight">
                                    ${price.toFixed(0)}
                                </span>
                            </div>
                            {checkoutUrl ? (
                                <span
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
                                    }}
                                    className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase bg-accent/15 hover:bg-accent/25 text-accent px-4 py-2 rounded-full transition-colors cursor-pointer"
                                >
                                    Buy Now <ExternalLink className="w-3 h-3" />
                                </span>
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            )}
                        </div>
                </div>
            </motion.div>
        </Link>
    );
}
