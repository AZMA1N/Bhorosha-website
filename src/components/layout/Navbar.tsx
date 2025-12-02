import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';

export const Navbar = () => {
    const location = useLocation();
    const isScrolled = true; // Simplified for now, can add scroll listener later

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={clsx(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            "bg-white/10 backdrop-blur-md border-b border-white/20"
        )}>
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-forest-green">
                    Bhorosha
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-forest-green",
                                location.pathname === link.path ? "text-forest-green" : "text-gray-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/login">
                        <Button variant="outline" size="sm">Log In</Button>
                    </Link>
                    <Link to="/list-land">
                        <Button size="sm">List Your Land</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
