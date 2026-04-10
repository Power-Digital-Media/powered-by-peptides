import { cn } from './button';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", className)} {...props}>
            {children}
        </div>
    );
}
