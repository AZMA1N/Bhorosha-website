import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import EarningsWidget from '../components/dashboard/EarningsWidget';
import ActiveProjectsMap from '../components/dashboard/ActiveProjectsMap';
import LiveFeed from '../components/dashboard/LiveFeed';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    // Redirect if not authenticated or if admin
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } else if (user?.role === 'admin') {
            navigate('/admin');
        }
    }, [isAuthenticated, user, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <DashboardLayout>
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-forest-green">Welcome back, {user.name.split(' ')[0]}</h1>
                    <p className="text-gray-500">Here's what's happening on your lands today.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <p className="font-bold text-gray-800">{user.name}</p>
                        <p className="text-xs text-gray-500">Landowner • {user.email}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center text-white font-bold text-lg border-2 border-white shadow-lg">
                        {user.avatar || user.name.substring(0, 2).toUpperCase()}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors"
                        title="Logout"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* User Info Card */}
            <div className="mb-6 p-4 bg-gradient-to-r from-forest-green/10 to-green-50 rounded-2xl border border-forest-green/20">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center text-white font-bold text-xl border-2 border-white shadow-lg">
                        {user.avatar || user.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-forest-green">{user.name}</h2>
                        <p className="text-sm text-gray-600">@{user.username} • {user.email}</p>
                        {user.phone && <p className="text-sm text-gray-500">{user.phone}</p>}
                    </div>
                    <div className="ml-auto text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            Active Landowner
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Earnings Widget - Spans 12 md:4 */}
                <div className="col-span-12 md:col-span-4 h-full">
                    <EarningsWidget />
                </div>

                {/* Active Projects Map - Spans 12 md:8 */}
                <div className="col-span-12 md:col-span-8 h-full">
                    <ActiveProjectsMap />
                </div>

                {/* My Lands Summary - Spans 12 md:4 */}
                <div className="col-span-12 md:col-span-4">
                    <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 border border-white/40 shadow-sm h-full">
                        <h2 className="text-xl font-bold text-forest-green mb-4">My Lands</h2>
                        <div className="rounded-2xl overflow-hidden h-48 relative group cursor-pointer">
                            <img
                                src="/assets/dashboard/land_placeholder.png"
                                alt="My Land"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <div className="text-white">
                                    <h3 className="font-bold text-lg">{user.name}'s Farm</h3>
                                    <p className="text-sm opacity-90">12.5 Acres • Active</p>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => navigate('/list-land')}
                            className="w-full mt-4 py-3 rounded-xl border-2 border-forest-green text-forest-green font-bold hover:bg-forest-green hover:text-white transition-all"
                        >
                            List New Land
                        </button>
                    </div>
                </div>

                {/* Live Feed - Spans 12 md:8 */}
                <div className="col-span-12 md:col-span-8">
                    <h2 className="text-xl font-bold text-forest-green mb-4">Live Updates</h2>
                    <LiveFeed />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
