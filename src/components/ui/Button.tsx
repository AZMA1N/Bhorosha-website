import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    children,
    ...props
}) => {
    const variants = {
        primary: "bg-forest-green text-white hover:bg-forest-green/90 shadow-lg hover:shadow-forest-green/20",
        secondary: "bg-soft-clay text-forest-green hover:bg-soft-clay/90 shadow-md",
        outline: "border-2 border-forest-green text-forest-green hover:bg-forest-green/10",
        ghost: "hover:bg-black/5 text-forest-green",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2",
                variants[variant],
                sizes[size],
                isLoading && "opacity-70 cursor-not-allowed",
                className
            )}
            disabled={isLoading}
            {...props as any}
        >
            {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : null}
            {children}
        </motion.button>
    );
};
