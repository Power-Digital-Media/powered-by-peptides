import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Shield, Thermometer, FlaskConical, FileText } from "lucide-react";
import { getProductBySlug, getAllProductSlugs, PRODUCTS, CATEGORIES, getCategoryColor } from "@/data/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return getAllProductSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return { title: "Product Not Found" };
    return {
        title: `${product.fullName} | Powered by Peptides`,
        description: product.shortDescription,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) notFound();

    const category = CATEGORIES.find(c => c.id === product.category);
    const related = PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const specs = [
        { label: "Purity", value: product.purity, icon: Shield },
        { label: "Quantity", value: product.quantity, icon: FlaskConical },
        { label: "Form", value: product.form, icon: FileText },
        { label: "Storage", value: product.storage, icon: Thermometer },
    ];

    return (
        <div>
            {/* Header */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-accent/8 blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[100px]" />
                </div>

                <Container className="relative z-10">
                    <Link href="/shop" className="inline-flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm font-bold tracking-widest uppercase mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Shop
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Product Visual */}
                        <div className="lg:w-1/2">
                            <div className="glass-card rounded-[2.5rem] aspect-square flex items-center justify-center glow-blue relative overflow-hidden">
                                {product.image ? (
                                    <>
                                        <Image
                                            src={product.image}
                                            alt={product.fullName}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6 z-10">
                                            <div className="text-sm text-white/50 font-bold tracking-[0.3em] uppercase">{product.quantity} • {product.form}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                                        <div className="relative text-center space-y-4 p-12">
                                            <FlaskConical className="w-24 h-24 text-accent/30 mx-auto" />
                                            <div className="text-6xl font-bold tracking-tighter text-accent">{product.name}</div>
                                            <div className="text-sm text-white/30 font-bold tracking-[0.3em] uppercase">{product.quantity} • {product.form}</div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                            {/* Category Badge */}
                            {category && (
                                <span
                                    className="inline-block w-fit text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
                                    style={{
                                        color: category.color,
                                        borderColor: `${category.color}30`,
                                        backgroundColor: `${category.color}10`,
                                    }}
                                >
                                    {category.icon} {category.name}
                                </span>
                            )}

                            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{product.fullName}</h1>

                            <p className="text-muted-foreground leading-relaxed text-lg">{product.description}</p>

                            {/* Price & CTA */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                                <div>
                                    <span className="text-5xl font-bold tracking-tight">${product.price.toFixed(0)}</span>
                                    <span className="text-white/30 text-sm ml-2">USD</span>
                                </div>
                                {product.checkoutUrl ? (
                                    <a
                                        href={product.checkoutUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="premium" size="lg" className="px-12 w-full sm:w-auto">
                                            Purchase <ExternalLink className="ml-2 w-4 h-4" />
                                        </Button>
                                    </a>
                                ) : (
                                    <Button variant="premium" size="lg" className="px-12 opacity-50 cursor-not-allowed" disabled>
                                        Coming Soon
                                    </Button>
                                )}
                            </div>

                            {/* Accepted Payments */}
                            <div className="flex items-center gap-3 text-[10px] text-white/30 font-bold tracking-[0.2em] uppercase">
                                <Shield className="w-3.5 h-3.5 text-accent/50" />
                                Secure Checkout via Square — Apple Pay • Google Pay • All Major Cards
                            </div>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {specs.map(spec => (
                                    <div key={spec.label} className="glass-card rounded-2xl p-5 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <spec.icon className="w-4 h-4 text-accent/60" />
                                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">{spec.label}</span>
                                        </div>
                                        <p className="text-sm font-medium">{spec.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CAS Number */}
                            {product.casNumber && product.casNumber !== 'Proprietary Blend' && (
                                <div className="text-xs text-white/30">
                                    <span className="font-bold tracking-widest uppercase">CAS:</span> {product.casNumber} &bull;
                                    <span className="font-bold tracking-widest uppercase ml-2">MW:</span> {product.molecularWeight}
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Research Applications */}
            {product.researchApplications && product.researchApplications.length > 0 && (
                <Section className="border-t border-white/5">
                    <Container>
                        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-8">Research Applications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.researchApplications.map((app: string, i: number) => (
                                <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                    <span className="text-sm text-white/80">{app}</span>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Compliance Disclaimer */}
            <div className="border-t border-white/5">
                <Container className="py-12">
                    <div className="glass-card rounded-2xl p-8 border-accent/10">
                        <div className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-sm mb-2 text-accent">Research Use Only</h3>
                                <p className="text-xs text-white/40 leading-relaxed">
                                    This product is intended solely for laboratory research, analytical testing, and educational purposes.
                                    NOT FOR HUMAN CONSUMPTION. NOT FOR MEDICAL, VETERINARY, OR DIAGNOSTIC USE.
                                    This product has not been evaluated by the FDA.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Related Products */}
            {related.length > 0 && (
                <Section className="border-t border-white/5">
                    <Container>
                        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">Related Compounds</h2>
                        <div className="text-3xl md:text-4xl font-bold tracking-tight mb-12">More in <span className="text-white/40 italic">{category?.name}.</span></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {related.map(p => {
                                const catName = CATEGORIES.find(c => c.id === p.category)?.shortName || p.category;
                                return (
                                    <ProductCard
                                        key={p.id}
                                        slug={p.slug}
                                        name={p.name}
                                        fullName={p.fullName}
                                        price={p.price}
                                        category={catName}
                                        categoryColor={getCategoryColor(p.category)}
                                        shortDescription={p.shortDescription}
                                        purity={p.purity}
                                        quantity={p.quantity}
                                        image={p.image}
                                        checkoutUrl={p.checkoutUrl}
                                    />
                                );
                            })}
                        </div>
                    </Container>
                </Section>
            )}
        </div>
    );
}
