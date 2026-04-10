"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./container";
import { Button, cn } from "./button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { href: "/shop", label: "Shop" },
    { href: "/learn-more", label: "Learn More" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                isScrolled
                    ? "bg-black/60 backdrop-blur-2xl border-white/10 py-3 shadow-[0_2px_40px_rgba(0,0,0,0.5)]"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                    <Image
                        src="/images/Logo_Alpha.webp"
                        alt="Powered by Peptides"
                        width={180}
                        height={48}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-accent relative py-4 group",
                                pathname === link.href ? "text-accent" : "text-white/60"
                            )}
                        >
                            {link.label}
                            <span className={cn(
                                "absolute bottom-2 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full",
                                pathname === link.href && "w-full"
                            )} />
                        </Link>
                    ))}
                    <Link href="/shop">
                        <Button size="sm" variant="premium" className="px-6 font-bold shadow-none rounded-full h-10">
                            Shop Now
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && mounted && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl md:hidden overflow-y-auto"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between p-8 border-b border-white/5">
                            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                                <Image
                                    src="/images/Logo_Alpha.webp"
                                    alt="Powered by Peptides"
                                    width={140}
                                    height={40}
                                    className="h-9 w-auto object-contain"
                                />
                            </Link>
                            <button
                                className="p-2 text-white/80 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="p-8 flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <div key={link.href} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-2xl font-bold tracking-tight py-4 block transition-colors",
                                            pathname === link.href ? "text-accent" : "text-white"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            ))}

                            {/* Mobile Shop Button */}
                            <div className="pt-10 border-t border-white/10">
                                <Link href="/shop" onClick={() => setIsOpen(false)} className="w-full block">
                                    <Button className="w-full text-xl h-20 rounded-full font-bold shadow-2xl" variant="premium">
                                        Shop Now
                                    </Button>
                                </Link>
                            </div>

                            {/* Disclaimer */}
                            <p className="text-[10px] text-white/30 mt-8 leading-relaxed uppercase tracking-widest">
                                All products are for laboratory research use only.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
