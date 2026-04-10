"use client";

import { Container } from "./container";
import { cn } from "./button";
import { motion } from "framer-motion";

interface PageHeaderProps {
    tag?: string;
    heading: React.ReactNode;
    subheading?: string;
    backgroundImage?: string;
    centered?: boolean;
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
};

export function PageHeader({ tag, heading, subheading, backgroundImage, centered = true }: PageHeaderProps) {
    return (
        <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-end pb-20 md:items-center md:pb-0 pt-32 overflow-hidden bg-black">
            {/* Potion Blue Mesh Gradient */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />

                {backgroundImage && (
                    <div
                        className="absolute inset-0 opacity-20 grayscale scale-110 blur-[2px]"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <Container className={cn("relative z-10", centered && "text-center")}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    className="space-y-6"
                >
                    {tag && (
                        <motion.div variants={fadeInUp}>
                            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-2 shadow-sm">
                                {tag}
                            </span>
                        </motion.div>
                    )}

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white text-balance"
                    >
                        {heading}
                    </motion.h1>

                    {subheading && (
                        <motion.p
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed tracking-wide opacity-80"
                        >
                            {subheading}
                        </motion.p>
                    )}
                </motion.div>
            </Container>
        </section>
    );
}
