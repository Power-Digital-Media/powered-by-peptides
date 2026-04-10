"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, FlaskConical, Microscope, Truck, Syringe } from "lucide-react";
import { getFeaturedProducts, CATEGORIES, getCategoryColor } from "@/data/products";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/*
          HERO SECTION
          - Full-bleed background image
          - Text overlaid on left side, opposite the vial
       */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Full-width hero image — fills entire section */}
        <Image
          src="/images/Hero_Image_PBP.webp"
          alt="Powered by Peptides — Premium Research Compounds"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlays for text readability on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-[1]" />

        {/* Subtle potion blue glow blending with image */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-[20%] left-[5%] w-[30%] h-[40%] rounded-full bg-accent/8 blur-[120px]" />
        </div>

        {/* Text Content — left half */}
        <Container className="relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-2xl space-y-8 py-32"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-5 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm text-[11px] font-bold tracking-[0.25em] uppercase text-accent shadow-lg shadow-accent/5">
                For Research Use Only
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.88]"
            >
              Research-Grade<br />
              <span className="text-accent italic font-serif">Peptides.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/70 max-w-md font-light leading-relaxed tracking-wide"
            >
              99.86% verified purity. Third-party tested. Trusted by qualified researchers nationwide.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5 pt-2"
            >
              <Link href="/shop">
                <Button size="lg" variant="premium" className="w-full sm:w-auto text-lg h-16 px-14 group shadow-xl shadow-accent/20">
                  Shop Compounds
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>
              <Link href="/learn-more">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-16 px-14 border-white/15 hover:bg-white/5 backdrop-blur-sm">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Trust Micro-Stats */}
            <motion.div variants={fadeInUp} className="flex gap-10 pt-8 border-t border-white/10">
              <div>
                <span className="text-3xl font-bold text-accent">99.86%</span>
                <p className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase mt-1">Purity</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-white/90">HPLC</span>
                <p className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase mt-1">Tested</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-white/90">COA</span>
                <p className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase mt-1">Available</p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/*
          TRUST METRICS — Bento Row
       */}
      <Section className="border-t border-white/5 bg-secondary/10">
        <Container>
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">Why Choose Us</h2>
            <div className="text-4xl md:text-6xl font-bold tracking-tight">Research-Grade <span className="text-white/40 italic">Quality.</span></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[280px] md:auto-rows-[320px]">
            {/* Purity Card — Featured */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }}
              whileHover={{ y: -8 }}
              className="md:col-span-8 glass-card rounded-[2.5rem] p-12 flex flex-col justify-end relative overflow-hidden group shadow-2xl border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-accent/30 blur-[80px]" />
              </div>
              <div className="relative z-20">
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block opacity-80">Verified Purity</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">Third-Party <br />Tested.</h2>
                <p className="text-white/50 text-sm max-w-md">Every batch undergoes rigorous HPLC and MS analysis. Certificates of Analysis available for all compounds.</p>
              </div>
            </motion.div>

            {/* Stat Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="md:col-span-4 glass-card rounded-[2.5rem] p-10 flex flex-col justify-center bg-accent text-accent-foreground text-center shadow-xl border-accent glow-blue-strong"
            >
              <span className="text-7xl font-bold tracking-tighter mb-1">99.86%</span>
              <span className="font-bold tracking-[0.2em] uppercase text-[10px] opacity-80">Verified Purity</span>
            </motion.div>

            {/* Shipping Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="md:col-span-4 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between group cursor-pointer border-white/5 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <Truck className="w-9 h-9 text-white/40" />
                <ArrowRight className="w-6 h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform opacity-40 group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground text-sm">Discreet, secure packaging with tracking on every order.</p>
              </div>
            </motion.div>

            {/* Shop CTA Card */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-8 glass-card rounded-[2.5rem] p-10 flex items-center justify-between border-accent/10 bg-secondary shadow-2xl"
            >
              <div className="space-y-4">
                <span className="text-accent/40 text-[10px] font-bold tracking-[0.3em] uppercase">Browse Catalog</span>
                <h3 className="text-4xl font-bold text-white tracking-tight">Explore Compounds.</h3>
                <Link href="/shop">
                  <Button variant="premium" className="rounded-full px-10 h-14 text-md font-bold">Shop All Products</Button>
                </Link>
              </div>
              <div className="hidden sm:flex w-32 h-32 md:w-44 md:h-44 items-center justify-center bg-accent/5 rounded-[2rem]">
                <FlaskConical className="w-12 h-12 md:w-16 md:h-16 text-accent animate-pulse" />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/*
          FEATURED PRODUCTS
       */}
      <Section>
        <Container>
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">Most Popular</h2>
              <div className="text-4xl md:text-6xl font-bold tracking-tight">Featured <span className="text-white/40 italic">Compounds.</span></div>
            </div>
            <Link href="/shop" className="inline-flex items-center text-white/60 font-bold hover:text-accent transition-colors gap-2 group text-sm tracking-widest uppercase">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product, i) => {
              const catName = CATEGORIES.find(c => c.id === product.category)?.shortName || product.category;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
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
        </Container>
      </Section>

      {/*
          CINEMATIC QUOTE SECTION
          - Fixed background parallax
          - Serif typography
       */}
      <section className="py-32 md:py-52 relative overflow-hidden bg-black flex items-center min-h-[60vh]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[60%] h-[60%] rounded-full bg-accent/8 blur-[150px]" />
          <div className="absolute bottom-0 right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
        </div>
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto italic text-3xl sm:text-4xl md:text-6xl font-serif text-white/95 leading-[1.15] tracking-tight"
          >
            &ldquo;Precision in every <span className="text-white/40">compound</span>, confidence in every <span className="text-accent underline decoration-accent/20 underline-offset-[14px]">result.</span>&rdquo;
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-accent font-bold tracking-[0.4em] uppercase text-xs opacity-70"
          >
            — Powered by Peptides
          </motion.div>
        </Container>
      </section>

      {/*
          CATEGORY PILLS
       */}
      <Section className="border-t border-white/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">Research Categories</h2>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">Find Your <span className="text-white/40 italic">Focus.</span></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat, i) => (
              <Link key={cat.slug} href={`/shop?category=${cat.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 flex items-center gap-5 group cursor-pointer border-white/5 hover:border-accent/20 transition-colors"
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg tracking-tight group-hover:text-accent transition-colors">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{cat.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto text-white/20 group-hover:text-accent transition-colors" />
                </motion.div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
