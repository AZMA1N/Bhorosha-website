import { DashboardLayout } from '../components/layout/DashboardLayout';
import EarningsWidget from '../components/dashboard/EarningsWidget';
import ActiveProjectsMap from '../components/dashboard/ActiveProjectsMap';
import LiveFeed from '../components/dashboard/LiveFeed';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-forest-green">Welcome back, Samiur</h1>
                    <p className="text-gray-500">Here's what's happening on your lands today.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <p className="font-bold text-gray-800">Samiur Rahman</p>
                        <p className="text-xs text-gray-500">Landowner</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-forest-green/10 border-2 border-forest-green p-1">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Samiur"
                            alt="Profile"
                            className="w-full h-full rounded-full"
                        />
                    </div>
                </div>
            </header>

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
                                    <h3 className="font-bold text-lg">Savar Model Farm</h3>
                                    <p className="text-sm opacity-90">12.5 Acres • Active</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-4 py-3 rounded-xl border-2 border-forest-green text-forest-green font-bold hover:bg-forest-green hover:text-white transition-all">
                            View All Properties
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
