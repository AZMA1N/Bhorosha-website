import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    float?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className,
    hoverEffect = false,
    float = false,
    ...props
}) => {
    return (
        <motion.div
            className={cn(
                "glass-card rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:bg-white/80 hover:shadow-xl hover:-translate-y-1 cursor-pointer",
                float && "anti-gravity-float",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            {...props as any}
        >
            {children}
        </motion.div>
    );
};
