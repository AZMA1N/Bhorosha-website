import { clsx } from 'clsx';

interface LogoProps {
    className?: string;
    withText?: boolean;
    light?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className, withText = true, light = false, size = 'md' }: LogoProps) => {
    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-14 h-14',
        lg: 'w-20 h-20'
    };

    const textSizeClasses = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-3xl'
    };

    return (
        <div className={clsx("flex items-center gap-3", className)}>
            <div className={clsx(
                "rounded-full overflow-hidden shadow-lg border-2",
                sizeClasses[size],
                light ? "border-white/30" : "border-forest-green/20"
            )}>
                <img 
                    src="/images/Logo.jpg" 
                    alt="Bhorosha Logo" 
                    className="w-full h-full object-cover"
                />
            </div>
            {withText && (
                <span className={clsx(
                    "font-bold tracking-tight drop-shadow-md",
                    textSizeClasses[size],
                    light ? "text-white" : "text-forest-green"
                )}>
                    Bhorosha
                </span>
            )}
        </div>
    );
};
