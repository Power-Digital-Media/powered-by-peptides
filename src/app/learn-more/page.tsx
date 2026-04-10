import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Shield, FlaskConical, AlertTriangle, CheckCircle, Microscope } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Learn More | Powered by Peptides",
    description: "Learn about peptides, research compliance, and our quality standards. All products are for laboratory research use only.",
};

const COMPLIANCE_POINTS = [
    "You are a qualified researcher or purchasing on behalf of a research facility",
    "Products will be used only in controlled laboratory environments",
    "You will comply with all local, state, and federal regulations",
    "You assume full responsibility for proper handling, storage, and use",
];

const QUALITY_POINTS = [
    { icon: Shield, title: "Third-Party Tested", desc: "Every batch undergoes independent HPLC and MS analysis with Certificates of Analysis." },
    { icon: FlaskConical, title: "Proper Labeling", desc: "All compounds are clearly labeled with purity, quantity, CAS number, and storage requirements." },
    { icon: Microscope, title: "Traceability", desc: "Full traceability for research documentation with batch numbers and lot tracking." },
];

export default function LearnMorePage() {
    return (
        <div>
            <PageHeader
                tag="Research Compliance"
                heading={<>Understanding <span className="text-accent italic font-serif">Peptides</span></>}
                subheading="Everything you need to know about our research compounds, compliance standards, and quality assurance."
            />

            {/* What Are Peptides */}
            <Section>
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">The Science</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">What Are <span className="text-white/40 italic">Peptides?</span></h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Peptides are short chains of amino acids that are commonly used in laboratory and scientific research.
                            Researchers study peptides for their potential roles in cellular signaling, metabolic pathways,
                            and biological processes at the molecular level.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our catalog includes GLP-1 receptor agonists, bioactive peptides, copper peptide complexes,
                            mitochondria-targeting compounds, and proprietary research blends — all manufactured to the
                            highest purity standards.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Research Use Only */}
            <div className="border-t border-white/5">
                <Section className="bg-secondary/20">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <div className="glass-card rounded-[2rem] p-10 md:p-14 border-accent/10 glow-blue">
                                <div className="flex items-start gap-5 mb-8">
                                    <AlertTriangle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-3xl font-bold tracking-tight mb-2">Research Use Only</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            All products sold on this website are intended solely for laboratory research,
                                            analytical testing, and educational purposes.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <p className="text-accent font-bold text-lg">NOT FOR HUMAN CONSUMPTION.</p>
                                    <p className="text-white/60 font-bold">NOT FOR MEDICAL, VETERINARY, OR DIAGNOSTIC USE.</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Our products are not dietary supplements, drugs, or cosmetics, and they have not been evaluated by the FDA.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </div>

            {/* Compliance & Responsibility */}
            <Section>
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">Your Agreement</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Compliance & <span className="text-white/40 italic">Responsibility</span></h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            By purchasing from this website, you acknowledge and agree that:
                        </p>

                        <div className="space-y-4">
                            {COMPLIANCE_POINTS.map((point, i) => (
                                <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-white/80">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* No Medical Claims */}
            <div className="border-t border-white/5">
                <Section>
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">Legal Disclaimer</h2>
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">No Medical <span className="text-white/40 italic">Claims</span></h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We do not provide medical advice, treatment recommendations, or usage instructions
                                for humans or animals. Any information provided is for educational and research
                                discussion purposes only and should not be interpreted as health guidance.
                            </p>
                        </div>
                    </Container>
                </Section>
            </div>

            {/* Quality & Transparency */}
            <div className="border-t border-white/5">
                <Section className="bg-secondary/10">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">Our Standards</h2>
                                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Quality & <span className="text-white/40 italic">Transparency</span></h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {QUALITY_POINTS.map((point, i) => (
                                    <div key={i} className="glass-card rounded-[2rem] p-8 flex flex-col items-center text-center space-y-4">
                                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                                            <point.icon className="w-7 h-7 text-accent" />
                                        </div>
                                        <h4 className="text-lg font-bold">{point.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            </div>

            {/* CTA */}
            <Section className="border-t border-white/5">
                <Container className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to <span className="text-accent italic font-serif">Research?</span></h2>
                    <p className="text-muted-foreground mb-10 max-w-lg mx-auto">Browse our full catalog of research peptides and compounds.</p>
                    <Link href="/shop">
                        <Button variant="premium" size="lg" className="px-14 h-16 text-lg">
                            Browse Catalog
                        </Button>
                    </Link>
                </Container>
            </Section>
        </div>
    );
}
