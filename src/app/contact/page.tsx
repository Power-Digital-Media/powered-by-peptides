import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, Shield } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Powered by Peptides",
    description: "Get in touch with Powered by Peptides. Text us, email us, or reach out through our contact page for questions about research peptides.",
};

const CONTACT_METHODS = [
    {
        icon: MessageCircle,
        title: "Text Us",
        description: "The fastest way to reach us. Send a text and we'll respond within minutes.",
        action: "Send a Text",
        href: "sms:+16015551234",
        highlight: true,
    },
    {
        icon: Mail,
        title: "Email Us",
        description: "For detailed inquiries, research questions, or bulk orders.",
        action: "Send Email",
        href: "mailto:info@poweredbypeptides.com",
        highlight: false,
    },
];

export default function ContactPage() {
    return (
        <div>
            <PageHeader
                tag="Get In Touch"
                heading={<>Contact <span className="text-accent italic font-serif">Us</span></>}
                subheading="Questions about products, orders, or research applications? We're here to help."
            />

            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            {CONTACT_METHODS.map((method) => (
                                <a
                                    key={method.title}
                                    href={method.href}
                                    className="block group"
                                >
                                    <div className={`glass-card rounded-[2rem] p-10 h-full flex flex-col justify-between border-white/5 group-hover:border-accent/20 transition-all duration-300 ${method.highlight ? 'glow-blue' : ''}`}>
                                        <div className="space-y-6">
                                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                                <method.icon className="w-7 h-7 text-accent" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">{method.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <Button
                                                variant={method.highlight ? "premium" : "outline"}
                                                className="rounded-full px-8 pointer-events-none"
                                            >
                                                {method.action}
                                            </Button>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Info Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-card rounded-2xl p-8 flex items-start gap-5">
                                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold mb-2">Response Time</h4>
                                    <p className="text-sm text-muted-foreground">We typically respond within a few hours during business hours (Mon-Fri, 9AM-5PM CST).</p>
                                </div>
                            </div>
                            <div className="glass-card rounded-2xl p-8 flex items-start gap-5">
                                <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold mb-2">For Researchers Only</h4>
                                    <p className="text-sm text-muted-foreground">We serve qualified researchers and research facilities. Be prepared to verify your credentials if requested.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Bottom CTA */}
            <div className="border-t border-white/5">
                <Section className="bg-secondary/10">
                    <Container className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Looking for <span className="text-accent italic font-serif">compounds?</span></h2>
                        <p className="text-muted-foreground mb-8">Browse our full catalog.</p>
                        <Link href="/shop">
                            <Button variant="premium" className="rounded-full px-10 h-14 text-md font-bold">
                                Shop Now
                            </Button>
                        </Link>
                    </Container>
                </Section>
            </div>
        </div>
    );
}
