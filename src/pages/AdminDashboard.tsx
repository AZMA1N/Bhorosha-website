import ResourceManagement from '../components/admin/ResourceManagement';
import LandListings from '../components/admin/LandListings';
import { GlassCard } from '../components/ui/GlassCard';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-off-white p-8">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-forest-green">Admin Console</h1>
                    <p className="text-gray-600">Overview of Bhorosha Ecosystem</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="font-semibold text-forest-green">System Admin</p>
                        <p className="text-xs text-gray-500">Super User</p>
                    </div>
                    <div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center text-white font-bold">
                        AD
                    </div>
                </div>
            </header>

            {/* Financials Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <GlassCard className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none">
                    <p className="text-blue-100 text-sm font-medium mb-1">Total B2B Sales</p>
                    <h3 className="text-3xl font-bold mb-4">৳ 12.5M</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" /> +15%
                        </span>
                        <span className="text-blue-100">vs last month</span>
                    </div>
                </GlassCard>

                <GlassCard className="bg-gradient-to-br from-forest-green to-emerald-800 text-white border-none">
                    <p className="text-green-100 text-sm font-medium mb-1">Landowner Payouts</p>
                    <h3 className="text-3xl font-bold mb-4">৳ 8.2M</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" /> +12%
                        </span>
                        <span className="text-green-100">vs last month</span>
                    </div>
                </GlassCard>

                <GlassCard className="bg-white">
                    <p className="text-gray-500 text-sm font-medium mb-1">Net Revenue</p>
                    <h3 className="text-3xl font-bold text-forest-green mb-4">৳ 4.3M</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> +8%
                        </span>
                        <span className="text-gray-400">vs last month</span>
                    </div>
                </GlassCard>
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
