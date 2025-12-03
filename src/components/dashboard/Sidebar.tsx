import { LayoutDashboard, Map, TrendingUp, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { icon: <LayoutDashboard className="w-5 h-5" />, label: "Command Center", path: "/dashboard" },
        { icon: <Map className="w-5 h-5" />, label: "My Lands", path: "/dashboard/my-lands" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Financials", path: "/dashboard/financials" },
        { icon: <Settings className="w-5 h-5" />, label: "Settings", path: "/dashboard/settings" },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className="w-64 bg-white/50 backdrop-blur-xl border-r border-white/40 h-screen flex flex-col p-6 fixed left-0 top-0 z-50">
            <div className="mb-10">
                <Link to="/">
                    <Logo />
                </Link>
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <motion.div
                            whileHover={{ x: 5 }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-2 ${isActive(item.path)
                                ? 'bg-forest-green text-white shadow-lg shadow-forest-green/20'
                                : 'text-gray-600 hover:bg-white/60 hover:text-forest-green'
                                }`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </motion.div>
                    </Link>
                ))}
            </nav>

            <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all mt-auto"
            >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
            </button>
        </div>
    );
};

export default Sidebar;
