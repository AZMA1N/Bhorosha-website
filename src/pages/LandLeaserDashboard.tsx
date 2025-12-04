import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Navbar } from '../components/layout/Navbar';
import { useAuth } from '../context/AuthContext';
import { 
    LogOut, 
    MapPin, 
    TrendingUp, 
    FileText, 
    Clock, 
    CheckCircle, 
    Leaf,
    DollarSign,
    BarChart3,
    Eye,
    MessageSquare
} from 'lucide-react';

// Mock data for leased lands
const leasedLands = [
    {
        id: 1,
        name: "Savar Organic Farm",
        location: "Savar, Dhaka",
        size: "25 Acres",
        leaseStart: "Jan 2025",
        leaseEnd: "Dec 2027",
        status: "Active",
        cropType: "Rice & Vegetables",
        monthlyRent: "৳ 45,000",
        nextPayment: "Dec 15, 2025",
        image: "/images/Pond.webp"
    },
    {
        id: 2,
        name: "Gazipur Millet Field",
        location: "Gazipur, Dhaka",
        size: "15 Acres",
        leaseStart: "Mar 2025",
        leaseEnd: "Feb 2028",
        status: "Active",
        cropType: "Millet",
        monthlyRent: "৳ 32,000",
        nextPayment: "Dec 20, 2025",
        image: "/images/Millet.jpg"
    },
    {
        id: 3,
        name: "Narsingdi Fish Pond",
        location: "Narsingdi",
        size: "8 Acres",
        leaseStart: "Jun 2025",
        leaseEnd: "May 2028",
        status: "Pending Approval",
        cropType: "Fish Farming",
        monthlyRent: "৳ 28,000",
        nextPayment: "-",
        image: "/images/Pond03.webp"
    }
];

// Mock payment history
const paymentHistory = [
    { id: 1, land: "Savar Organic Farm", amount: "৳ 45,000", date: "Nov 15, 2025", status: "Paid" },
    { id: 2, land: "Gazipur Millet Field", amount: "৳ 32,000", date: "Nov 20, 2025", status: "Paid" },
    { id: 3, land: "Savar Organic Farm", amount: "৳ 45,000", date: "Oct 15, 2025", status: "Paid" },
    { id: 4, land: "Gazipur Millet Field", amount: "৳ 32,000", date: "Oct 20, 2025", status: "Paid" },
];

// Mock available lands for lease
const availableLands = [
    {
        id: 1,
        name: "Premium Rice Paddy",
        location: "Comilla",
        size: "20 Acres",
        monthlyRent: "৳ 38,000",
        soilType: "Alluvial",
        waterSource: "Canal Irrigation",
        image: "/images/Millet01.jpg"
    },
    {
        id: 2,
        name: "Mushroom Cultivation Plot",
        location: "Mymensingh",
        size: "5 Acres",
        monthlyRent: "৳ 25,000",
        soilType: "Loamy",
        waterSource: "Tube Well",
        image: "/images/microgreen-problems.webp"
    }
];

const LandLeaserDashboard = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'overview' | 'leased' | 'available' | 'payments'>('overview');

    // Redirect if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-off-white to-green-50">
            <Navbar />
            
            <div className="container mx-auto px-4 pt-28 pb-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-forest-green">Land Leaser Dashboard</h1>
                        <p className="text-gray-500">Manage your leased agricultural lands</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="font-bold text-gray-800">{user.name}</p>
                            <p className="text-xs text-gray-500">Land Leaser • {user.email}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-lg border-2 border-white shadow-lg">
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

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <GlassCard className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">3</p>
                                <p className="text-sm text-gray-500">Leased Lands</p>
                            </div>
                        </div>
                    </GlassCard>
                    
                    <GlassCard className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">48</p>
                                <p className="text-sm text-gray-500">Total Acres</p>
                            </div>
                        </div>
                    </GlassCard>
                    
                    <GlassCard className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">৳ 1.05L</p>
                                <p className="text-sm text-gray-500">Monthly Rent</p>
                            </div>
                        </div>
                    </GlassCard>
                    
                    <GlassCard className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">2</p>
                                <p className="text-sm text-gray-500">Active Crops</p>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {[
                        { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
                        { id: 'leased', label: 'My Leased Lands', icon: <Leaf className="w-4 h-4" /> },
                        { id: 'available', label: 'Available Lands', icon: <MapPin className="w-4 h-4" /> },
                        { id: 'payments', label: 'Payment History', icon: <FileText className="w-4 h-4" /> },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as typeof activeTab)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                                activeTab === tab.id
                                    ? 'bg-forest-green text-white shadow-lg'
                                    : 'bg-white/50 text-gray-600 hover:bg-white'
                            }`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Upcoming Payments */}
                        <GlassCard className="p-6">
                            <h2 className="text-xl font-bold text-forest-green mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5" /> Upcoming Payments
                            </h2>
                            <div className="space-y-3">
                                {leasedLands.filter(l => l.status === 'Active').map((land) => (
                                    <div key={land.id} className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-100">
                                        <div>
                                            <p className="font-medium text-gray-800">{land.name}</p>
                                            <p className="text-sm text-gray-500">Due: {land.nextPayment}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-amber-600">{land.monthlyRent}</p>
                                            <Button size="sm" className="mt-1 text-xs">Pay Now</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Active Leases Summary */}
                        <GlassCard className="p-6">
                            <h2 className="text-xl font-bold text-forest-green mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5" /> Lease Status
                            </h2>
                            <div className="space-y-3">
                                {leasedLands.map((land) => (
                                    <div key={land.id} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                                        <img src={land.image} alt={land.name} className="w-12 h-12 rounded-lg object-cover" />
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-800">{land.name}</p>
                                            <p className="text-xs text-gray-500">{land.leaseStart} - {land.leaseEnd}</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            land.status === 'Active' 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {land.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Quick Actions */}
                        <GlassCard className="p-6 md:col-span-2">
                            <h2 className="text-xl font-bold text-forest-green mb-4">Quick Actions</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <button className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors text-center">
                                    <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                    <p className="font-medium text-gray-800">Browse Lands</p>
                                </button>
                                <button className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors text-center">
                                    <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                    <p className="font-medium text-gray-800">View Contracts</p>
                                </button>
                                <button className="p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors text-center">
                                    <DollarSign className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                                    <p className="font-medium text-gray-800">Make Payment</p>
                                </button>
                                <button className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors text-center">
                                    <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                                    <p className="font-medium text-gray-800">Contact Support</p>
                                </button>
                            </div>
                        </GlassCard>
                    </div>
                )}

                {activeTab === 'leased' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leasedLands.map((land, index) => (
                            <motion.div
                                key={land.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="overflow-hidden p-0">
                                    <div className="relative h-40">
                                        <img src={land.image} alt={land.name} className="w-full h-full object-cover" />
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                land.status === 'Active' 
                                                    ? 'bg-green-500 text-white' 
                                                    : 'bg-yellow-500 text-white'
                                            }`}>
                                                {land.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg text-gray-800 mb-1">{land.name}</h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                                            <MapPin className="w-4 h-4" /> {land.location}
                                        </p>
                                        
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            <div className="bg-gray-50 rounded-lg p-2">
                                                <p className="text-xs text-gray-500">Size</p>
                                                <p className="font-semibold text-gray-800">{land.size}</p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-2">
                                                <p className="text-xs text-gray-500">Crop Type</p>
                                                <p className="font-semibold text-gray-800">{land.cropType}</p>
                                            </div>
                                            <div className="bg-green-50 rounded-lg p-2">
                                                <p className="text-xs text-green-600">Monthly Rent</p>
                                                <p className="font-bold text-green-700">{land.monthlyRent}</p>
                                            </div>
                                            <div className="bg-blue-50 rounded-lg p-2">
                                                <p className="text-xs text-blue-600">Lease Period</p>
                                                <p className="font-semibold text-blue-700 text-sm">{land.leaseStart} - {land.leaseEnd}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            <Button size="sm" className="flex-1">View Details</Button>
                                            <Button size="sm" variant="outline" className="flex-1">Contract</Button>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                )}

                {activeTab === 'available' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-forest-green">Available Lands for Lease</h2>
                            <Button variant="outline" size="sm">Filter</Button>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {availableLands.map((land, index) => (
                                <motion.div
                                    key={land.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <GlassCard className="overflow-hidden p-0 hover:shadow-xl transition-shadow">
                                        <div className="relative h-40">
                                            <img src={land.image} alt={land.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            <div className="absolute bottom-3 left-3 text-white">
                                                <p className="font-bold">{land.monthlyRent}/month</p>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg text-gray-800 mb-1">{land.name}</h3>
                                            <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                                                <MapPin className="w-4 h-4" /> {land.location} • {land.size}
                                            </p>
                                            
                                            <div className="flex gap-2 mb-4">
                                                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                                                    {land.soilType}
                                                </span>
                                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                                    {land.waterSource}
                                                </span>
                                            </div>
                                            
                                            <Button className="w-full">Request Lease</Button>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'payments' && (
                    <GlassCard className="p-6">
                        <h2 className="text-xl font-bold text-forest-green mb-6">Payment History</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Land</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paymentHistory.map((payment) => (
                                        <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 font-medium text-gray-800">{payment.land}</td>
                                            <td className="py-3 px-4 text-gray-800">{payment.amount}</td>
                                            <td className="py-3 px-4 text-gray-500">{payment.date}</td>
                                            <td className="py-3 px-4">
                                                <span className="flex items-center gap-1 text-green-600">
                                                    <CheckCircle className="w-4 h-4" /> {payment.status}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <button className="text-forest-green hover:underline text-sm">
                                                    View Receipt
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                )}
            </div>
        </div>
    );
};

export default LandLeaserDashboard;
