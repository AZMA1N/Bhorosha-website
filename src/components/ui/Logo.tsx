import { Sprout } from 'lucide-react';
import { clsx } from 'clsx';

interface LogoProps {
    className?: string;
    withText?: boolean;
    light?: boolean;
}

export const Logo = ({ className, withText = true, light = false }: LogoProps) => {
    return (
        <div className={clsx("flex items-center gap-3", className)}>
            <div className={clsx(
                "w-10 h-10 rounded-xl flex items-center justify-center shadow-lg",
                light ? "bg-white text-forest-green" : "bg-forest-green text-white"
            )}>
                <Sprout className="w-6 h-6" />
            </div>
            {withText && (
                <span className={clsx(
                    "text-2xl font-bold tracking-tight drop-shadow-md",
                    light ? "text-white" : "text-forest-green"
                )}>
                    Bhorosha
                </span>
            )}
        </div>
    );
};
