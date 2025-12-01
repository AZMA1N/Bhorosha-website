import { LayoutDashboard, Map, TrendingUp, Settings, LogOut, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const menuItems = [
        { icon: <LayoutDashboard className="w-5 h-5" />, label: "Command Center", active: true },
        { icon: <Map className="w-5 h-5" />, label: "My Lands", active: false },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Financials", active: false },
        { icon: <Settings className="w-5 h-5" />, label: "Settings", active: false },
    ];

    return (
        <div className="w-64 bg-white/50 backdrop-blur-xl border-r border-white/40 h-screen flex flex-col p-6 fixed left-0 top-0 z-50">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-forest-green rounded-xl flex items-center justify-center text-white">
                    <Sprout className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-forest-green">Bhorosha</span>
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ x: 5 }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active
                            ? 'bg-forest-green text-white shadow-lg shadow-forest-green/20'
                            : 'text-gray-600 hover:bg-white/60 hover:text-forest-green'
                            }`}
                    >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                    </motion.button>
                ))}
            </nav>

            <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all mt-auto">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
            </button>
        </div>
    );
};

export default Sidebar;
