import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';

import { Logo } from '../ui/Logo';

export const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Marketplace', path: '/marketplace' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    // Determine if we are on the landing page (transparent header initially)
    const isLanding = location.pathname === '/';

    return (
        <nav className={clsx(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled || !isLanding
                ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm py-2"
                : "bg-white/5 backdrop-blur-md border-b border-white/10 py-4"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link to="/">
                    <Logo light={!isScrolled && isLanding} />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-forest-green",
                                location.pathname === link.path
                                    ? "text-forest-green"
                                    : (!isScrolled && isLanding ? "text-white/90 hover:text-white" : "text-gray-600")
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/login">
                        <Button size="sm">
                            Log In
                        </Button>
                    </Link>
                    <Link to="/list-land">
                        <Button size="sm">List Your Land</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
