import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { ProductCTA } from "@/components/ui/product-cta";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Thermometer, FlaskConical, FileText, BookOpen, Microscope, Atom, Beaker, GraduationCap, ChevronRight, ExternalLink } from "lucide-react";
import { getProductBySlug, getAllProductSlugs, PRODUCTS, CATEGORIES, getCategoryColor, SITE_CONFIG } from "@/data/products";
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
        title: `${product.fullName} — Research Peptide | Powered by Peptides`,
        description: product.description?.slice(0, 160) || product.shortDescription,
        openGraph: {
            title: `${product.fullName} | Powered by Peptides`,
            description: product.shortDescription,
            images: product.image ? [{ url: product.image }] : [],
        },
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

    const baseUrl = SITE_CONFIG.url;

    // ── JSON-LD: Product Schema ──
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.fullName,
        description: product.description,
        image: product.image ? `${baseUrl}${product.image}` : undefined,
        sku: product.sku,
        brand: {
            "@type": "Brand",
            name: "Powered by Peptides",
        },
        offers: {
            "@type": "Offer",
            price: product.price.toFixed(2),
            priceCurrency: product.currency || "USD",
            availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            url: `${baseUrl}/product/${product.slug}`,
            seller: { "@id": `${baseUrl}/#organization` },
        },
        additionalProperty: [
            product.purity && { "@type": "PropertyValue", name: "Purity", value: product.purity },
            product.casNumber && { "@type": "PropertyValue", name: "CAS Number", value: product.casNumber },
            product.molecularWeight && { "@type": "PropertyValue", name: "Molecular Weight", value: product.molecularWeight },
            product.molecularFormula && { "@type": "PropertyValue", name: "Molecular Formula", value: product.molecularFormula },
            product.form && { "@type": "PropertyValue", name: "Form", value: product.form },
        ].filter(Boolean),
    };

    // ── JSON-LD: Breadcrumb Schema ──
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
            { "@type": "ListItem", position: 2, name: "Shop", item: `${baseUrl}/shop` },
            category && { "@type": "ListItem", position: 3, name: category.name, item: `${baseUrl}/shop?category=${category.slug}` },
            { "@type": "ListItem", position: category ? 4 : 3, name: product.fullName },
        ].filter(Boolean),
    };

    return (
        <div>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Header */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-accent/8 blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[100px]" />
                </div>

                <Container className="relative z-10">
                    {/* Visible Breadcrumb Navigation */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><ChevronRight className="w-3 h-3" /></li>
                            <li><Link href="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
                            {category && (
                                <>
                                    <li><ChevronRight className="w-3 h-3" /></li>
                                    <li><Link href={`/shop?category=${category.slug}`} className="hover:text-accent transition-colors">{category.name}</Link></li>
                                </>
                            )}
                            <li><ChevronRight className="w-3 h-3" /></li>
                            <li className="text-white/70">{product.name}</li>
                        </ol>
                    </nav>

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
                            <ProductCTA
                                productId={product.id}
                                slug={product.slug}
                                name={product.name}
                                fullName={product.fullName}
                                price={product.price}
                                image={product.image}
                                purity={product.purity}
                                productQuantity={product.quantity}
                            />

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

            {/* ═══════════════════════════════════════ */}
            {/* MECHANISM OF ACTION                     */}
            {/* ═══════════════════════════════════════ */}
            {product.mechanismOfAction && (
                <Section className="border-t border-white/5">
                    <Container>
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Atom className="w-5 h-5 text-accent" />
                                <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent">Mechanism of Action</h2>
                            </div>
                            <p className="text-lg text-white/70 leading-relaxed">{product.mechanismOfAction}</p>
                        </div>
                    </Container>
                </Section>
            )}

            {/* ═══════════════════════════════════════ */}
            {/* RESEARCH SUMMARY                        */}
            {/* ═══════════════════════════════════════ */}
            {product.researchSummary && (
                <Section className="border-t border-white/5">
                    <Container>
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Microscope className="w-5 h-5 text-accent" />
                                <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent">Research Overview</h2>
                            </div>
                            <div className="prose prose-invert prose-lg max-w-none">
                                {product.researchSummary.split('\n\n').map((paragraph: string, i: number) => (
                                    <p key={i} className="text-white/60 leading-relaxed mb-6">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

            {/* ═══════════════════════════════════════ */}
            {/* KEY STUDIES                              */}
            {/* ═══════════════════════════════════════ */}
            {product.keyStudies && product.keyStudies.length > 0 && (
                <Section className="border-t border-white/5">
                    <Container>
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="w-5 h-5 text-accent" />
                            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent">Published Research</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.keyStudies.map((study: { title: string; authors: string; journal: string; year: string; url: string; finding: string }, i: number) => (
                                <div key={i} className="glass-card rounded-2xl p-6 space-y-3 hover:border-accent/20 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-sm font-semibold text-white/90 leading-snug">{study.title}</h3>
                                        {study.url && (
                                            <a href={study.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-accent hover:text-accent/80 transition-colors" title="View on PubMed">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                    <div className="text-xs text-white/30">
                                        {study.authors} • <span className="text-accent/60">{study.journal}</span> ({study.year})
                                    </div>
                                    <p className="text-xs text-white/50 leading-relaxed">{study.finding}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* ═══════════════════════════════════════ */}
            {/* CHEMICAL PROFILE                         */}
            {/* ═══════════════════════════════════════ */}
            {product.chemicalProfile && (
                <Section className="border-t border-white/5">
                    <Container>
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-3 mb-8">
                                <Beaker className="w-5 h-5 text-accent" />
                                <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent">Chemical Profile</h2>
                            </div>
                            <div className="glass-card rounded-2xl overflow-hidden">
                                <table className="w-full text-sm">
                                    <tbody>
                                        {product.chemicalProfile.sequence && (
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 px-6 text-white/40 font-bold text-xs tracking-widest uppercase w-1/3">Sequence</td>
                                                <td className="py-4 px-6 text-white/80 font-mono text-xs break-all">{product.chemicalProfile.sequence}</td>
                                            </tr>
                                        )}
                                        {product.molecularFormula && (
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 px-6 text-white/40 font-bold text-xs tracking-widest uppercase">Molecular Formula</td>
                                                <td className="py-4 px-6 text-white/80">{product.molecularFormula}</td>
                                            </tr>
                                        )}
                                        {product.molecularWeight && (
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 px-6 text-white/40 font-bold text-xs tracking-widest uppercase">Molecular Weight</td>
                                                <td className="py-4 px-6 text-white/80">{product.molecularWeight}</td>
                                            </tr>
                                        )}
                                        {product.casNumber && product.casNumber !== 'Proprietary Blend' && (
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 px-6 text-white/40 font-bold text-xs tracking-widest uppercase">CAS Number</td>
                                                <td className="py-4 px-6 text-white/80">{product.casNumber}</td>
                                            </tr>
                                        )}
                                        {product.chemicalProfile.halfLife && (
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 px-6 text-white/40 font-bold text-xs tracking-widest uppercase">Half-Life</td>
                                                <td className="py-4 px-6 text-white/80">{product.chemicalProfile.halfLife}</td>
                                            </tr>
                                        )}
                                        {product.chemicalProfile.solubility && (
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 px-6 text-white/40 font-bold text-xs tracking-widest uppercase">Solubility</td>
                                                <td className="py-4 px-6 text-white/80">{product.chemicalProfile.solubility}</td>
                                            </tr>
                                        )}
                                        {product.chemicalProfile.bioavailability && (
                                            <tr>
                                                <td className="py-4 px-6 text-white/40 font-bold text-xs tracking-widest uppercase">Bioavailability</td>
                                                <td className="py-4 px-6 text-white/80">{product.chemicalProfile.bioavailability}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

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

            {/* ═══════════════════════════════════════ */}
            {/* REFERENCES & FURTHER READING            */}
            {/* ═══════════════════════════════════════ */}
            {product.references && product.references.length > 0 && (
                <Section className="border-t border-white/5">
                    <Container>
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-3 mb-8">
                                <GraduationCap className="w-5 h-5 text-accent" />
                                <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent">References & Further Reading</h2>
                            </div>
                            <ol className="space-y-3 list-decimal list-inside">
                                {product.references.map((ref: { title: string; url: string; source: string }, i: number) => (
                                    <li key={i} className="text-sm text-white/50 leading-relaxed">
                                        <a
                                            href={ref.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent/80 hover:text-accent transition-colors underline underline-offset-2"
                                        >
                                            {ref.title}
                                        </a>
                                        <span className="text-white/30 ml-2">— {ref.source}</span>
                                    </li>
                                ))}
                            </ol>
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
                                        id={p.id}
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
