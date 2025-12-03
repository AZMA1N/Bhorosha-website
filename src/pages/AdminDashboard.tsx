import ResourceManagement from '../components/admin/ResourceManagement';
import LandListings from '../components/admin/LandListings';
import { GlassCard } from '../components/ui/GlassCard';
import { Logo } from '../components/ui/Logo';
import { CountUp } from '../components/ui/CountUp';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-off-white p-8">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <Logo />
                        <div className="h-6 w-px bg-gray-300 mx-2"></div>
                        <h1 className="text-2xl font-bold text-forest-green">Admin Console</h1>
                    </div>
                    <p className="text-gray-600 ml-1">Overview of Bhorosha Ecosystem</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <p className="font-semibold text-forest-green">System Admin</p>
                        <p className="text-xs text-gray-500">Super User</p>
                    </div>
                    <div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-white">
                        AD
                    </div>
                </div>
            </header>

            {/* Financials Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Total B2B Sales */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[180px] group">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                        alt="B2B Sales"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/70 backdrop-blur-[1px]"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
                        <div>
                            <p className="text-blue-100 text-sm font-medium mb-1">Total B2B Sales</p>
                            <h3 className="text-4xl font-bold mb-2 drop-shadow-md">
                                <CountUp value={12500000} prefix="৳ " />
                            </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 backdrop-blur-md border border-white/10">
                                <ArrowUpRight className="w-3 h-3" /> +15%
                            </span>
                            <span className="text-blue-100">vs last month</span>
                        </div>
                    </div>
                </div>

                {/* Landowner Payouts */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[180px] group">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
                        alt="Landowner Payouts"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-forest-green/90 to-emerald-800/70 backdrop-blur-[1px]"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
                        <div>
                            <p className="text-green-100 text-sm font-medium mb-1">Landowner Payouts</p>
                            <h3 className="text-4xl font-bold mb-2 drop-shadow-md">
                                <CountUp value={8200000} prefix="৳ " />
                            </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 backdrop-blur-md border border-white/10">
                                <ArrowUpRight className="w-3 h-3" /> +12%
                            </span>
                            <span className="text-green-100">vs last month</span>
                        </div>
                    </div>
                </div>

                {/* Net Revenue */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[180px] group">
                    <img
                        src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2670&auto=format&fit=crop"
                        alt="Net Revenue"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/90 to-orange-800/70 backdrop-blur-[1px]"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
                        <div>
                            <p className="text-orange-100 text-sm font-medium mb-1">Net Revenue</p>
                            <h3 className="text-4xl font-bold mb-2 drop-shadow-md">
                                <CountUp value={4300000} prefix="৳ " />
                            </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 backdrop-blur-md border border-white/10">
                                <TrendingUp className="w-3 h-3" /> +8%
                            </span>
                            <span className="text-orange-100">vs last month</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Resource Management - Spans 4 columns */}
                <div className="col-span-12 md:col-span-4">
                    <ResourceManagement />
                </div>

                {/* Land Listings - Spans 8 columns */}
                <div className="col-span-12 md:col-span-8">
                    <LandListings />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
