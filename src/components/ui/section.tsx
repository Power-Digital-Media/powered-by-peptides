import { cn } from './button';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
    return (
        <section className={cn("py-24 md:py-32 lg:py-40 relative overflow-hidden", className)} {...props}>
            {children}
        </section>
    );
}
