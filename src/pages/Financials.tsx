import { DashboardLayout } from '../components/layout/DashboardLayout';
import LiveFeed from '../components/dashboard/LiveFeed';
import EarningsWidget from '../components/dashboard/EarningsWidget';
import { GlassCard } from '../components/ui/GlassCard';
import { ArrowDownLeft, Calendar, TrendingUp, Wheat, DollarSign, Leaf, Sprout } from 'lucide-react';

// Profit breakdown transactions (all positive - landowner receives revenue from lease)
const recentTransactions = [
    {
        id: 1,
        type: 'Monthly Lease Payment',
        description: 'November 2025 lease revenue',
        amount: 12500,
        date: 'Nov 30, 2025',
        icon: DollarSign,
    },
    {
        id: 2,
        type: 'Harvest Profit Share',
        description: 'Aman Rice harvest - your 15% share',
        amount: 28000,
        date: 'Nov 25, 2025',
        icon: Wheat,
    },
    {
        id: 3,
        type: 'Monthly Lease Payment',
        description: 'October 2025 lease revenue',
        amount: 12500,
        date: 'Oct 31, 2025',
        icon: DollarSign,
    },
    {
        id: 4,
        type: 'Bonus - Bumper Crop',
        description: 'Extra yield bonus payment',
        amount: 8500,
        date: 'Oct 20, 2025',
        icon: Sprout,
    },
    {
        id: 5,
        type: 'Monthly Lease Payment',
        description: 'September 2025 lease revenue',
        amount: 12500,
        date: 'Sep 30, 2025',
        icon: DollarSign,
    },
    {
        id: 6,
        type: 'Crop Sale Revenue',
        description: 'Vegetables sold at market',
        amount: 15200,
        date: 'Sep 15, 2025',
        icon: Leaf,
    }
];

const Financials = () => {
    // Calculate totals
    const totalEarnings = recentTransactions.reduce((sum, t) => sum + t.amount, 0);
    const leasePayments = recentTransactions.filter(t => t.type === 'Monthly Lease Payment');
    const totalLeaseEarnings = leasePayments.reduce((sum, t) => sum + t.amount, 0);

    return (
        <DashboardLayout>
            <header className="mb-8">
                <h1 className="page-title">Financials</h1>
                <p className="page-subtitle">Track your lease earnings and profit breakdown</p>
            </header>

            <div className="grid grid-cols-12 gap-6">
                {/* Earnings Overview - Spans 8 columns */}
                <div className="col-span-12 md:col-span-8">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <EarningsWidget />
                        
                        {/* Lease Duration Card */}
                        <GlassCard className="bg-white p-5 flex flex-col justify-between shadow-lg">
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">Lease Duration</p>
                                <h3 className="text-3xl font-bold text-forest-green">11 <span className="text-lg font-normal text-gray-600">months</span></h3>
                            </div>
                            <div className="flex items-center gap-2 text-forest-green text-sm font-medium mt-2">
                                <Calendar className="w-4 h-4" /> Since Jan 2025
                            </div>
                        </GlassCard>

                        {/* Total Earnings Card */}
                        <GlassCard className="bg-white p-5 flex flex-col justify-between shadow-lg">
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">Total Earnings</p>
                                <h3 className="text-3xl font-bold text-forest-green">৳ {totalEarnings.toLocaleString()}</h3>
                            </div>
                            <div className="flex items-center gap-2 text-green-600 text-sm font-medium mt-2">
                                <TrendingUp className="w-4 h-4" /> +20% vs last month
                            </div>
                        </GlassCard>
                    </div>

                    {/* Profit Breakdown Summary */}
                    <div className="bg-gradient-to-r from-forest-green/10 to-green-100 rounded-2xl p-5 mb-6 border border-green-200">
                        <h3 className="text-lg font-bold text-forest-green mb-3">Profit Breakdown Summary</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-forest-green">৳{totalLeaseEarnings.toLocaleString()}</p>
                                <p className="text-xs text-gray-600">Monthly Lease Payments</p>
                            </div>
                            <div className="text-center border-x border-green-300">
                                <p className="text-2xl font-bold text-green-600">৳{(totalEarnings - totalLeaseEarnings).toLocaleString()}</p>
                                <p className="text-xs text-gray-600">Harvest & Bonuses</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-emerald-600">৳{totalEarnings.toLocaleString()}</p>
                                <p className="text-xs text-gray-600">Total Revenue</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-forest-green mb-4">Recent Transactions</h2>
                    <div className="space-y-3">
                        {recentTransactions.map((transaction) => {
                            const IconComponent = transaction.icon;
                            return (
                                <GlassCard key={transaction.id} className="p-4 flex justify-between items-center hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-600">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800">{transaction.type}</p>
                                            <p className="text-xs text-gray-500">{transaction.description}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-bold text-green-600 flex items-center gap-1">
                                            <ArrowDownLeft className="w-4 h-4" />
                                            +৳ {transaction.amount.toLocaleString()}
                                        </span>
                                        <p className="text-xs text-gray-400">{transaction.date}</p>
                                    </div>
                                </GlassCard>
                            );
                        })}
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
