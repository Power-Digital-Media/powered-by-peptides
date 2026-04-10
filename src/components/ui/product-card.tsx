"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    featured = false,
}: ProductCardProps) {
    return (
        <Link href={`/product/${slug}`}>
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                    "glass-card rounded-[2rem] p-8 flex flex-col justify-between h-full group cursor-pointer border-white/5 shadow-lg relative overflow-hidden",
                    featured && "glow-blue"
                )}
            >
                {/* Category Badge */}
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

                {/* Product Info */}
                <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                        {name}
                    </h3>
                    {fullName && name !== fullName && (
                        <p className="text-xs text-white/40 font-medium">{fullName}</p>
                    )}
                    {shortDescription && (
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 opacity-70">
                            {shortDescription}
                        </p>
                    )}
                </div>

                {/* Bottom Row */}
                <div className="flex items-end justify-between mt-8 pt-6 border-t border-white/5">
                    <div>
                        {quantity && (
                            <span className="text-[10px] text-white/30 font-bold tracking-widest uppercase block mb-1">
                                {quantity}
                            </span>
                        )}
                        <span className="text-3xl font-bold tracking-tight">
                            ${price.toFixed(0)}
                        </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
