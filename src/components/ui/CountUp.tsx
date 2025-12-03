import { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface CountUpProps {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export const CountUp = ({ value, duration = 2, prefix = '', suffix = '', className = '' }: CountUpProps) => {
    const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const displayValue = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return (
        <motion.span className={className}>
            {prefix}<motion.span>{displayValue}</motion.span>{suffix}
        </motion.span>
    );
};
