import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'premium';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                    {
                        'bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]': variant === 'primary',
                        'bg-secondary text-secondary-foreground hover:bg-white/10 border border-white/5': variant === 'secondary',
                        'border border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20': variant === 'outline',
                        'hover:bg-white/5 text-muted-foreground hover:text-white': variant === 'ghost',
                        'bg-glass backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-accent/40': variant === 'glass',
                        'bg-accent text-accent-foreground hover:brightness-110 shadow-[0_0_20px_rgba(0,212,255,0.25)] font-bold': variant === 'premium',

                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-8 text-base': size === 'md',
                        'h-14 px-10 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, cn };
