import { DashboardLayout } from '../components/layout/DashboardLayout';
import LiveFeed from '../components/dashboard/LiveFeed';
import EarningsWidget from '../components/dashboard/EarningsWidget';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const Financials = () => {
    return (
        <DashboardLayout>
            <header className="mb-8">
                <h1 className="page-title">Financials</h1>
                <p className="page-subtitle">Track your earnings and expenses</p>
            </header>

            <div className="grid grid-cols-12 gap-6">
                {/* Earnings Overview - Spans 8 columns */}
                <div className="col-span-12 md:col-span-8">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <EarningsWidget />
                        <GlassCard className="bg-white p-6 flex flex-col justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">Total Expenses</p>
                                <h3 className="text-3xl font-bold text-gray-800">৳ 45,200</h3>
                            </div>
                            <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                                <ArrowUpRight className="w-4 h-4" /> +5% vs last month
                            </div>
                        </GlassCard>
                    </div>

                    <h2 className="text-xl font-bold text-forest-green mb-4">Recent Transactions</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((id) => (
                            <GlassCard key={id} className="p-4 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${id % 2 === 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                        {id % 2 === 0 ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownLeft className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">{id % 2 === 0 ? 'Equipment Maintenance' : 'Crop Sale Revenue'}</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                                <span className={`font-bold ${id % 2 === 0 ? 'text-red-600' : 'text-green-600'}`}>
                                    {id % 2 === 0 ? '-' : '+'}৳ {id * 5000}
                                </span>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Live Feed - Spans 4 columns */}
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-xl font-bold text-forest-green mb-4">Financial Updates</h2>
                    <LiveFeed />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Financials;
