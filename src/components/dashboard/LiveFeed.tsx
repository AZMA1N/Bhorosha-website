import { useState, useEffect } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Activity, MapPin, Clock, TrendingUp, Sprout, Droplets, CheckCircle } from 'lucide-react';

interface FeedItem {
    id: number;
    icon: 'harvest' | 'irrigation' | 'planting' | 'profit';
    title: string;
    time: string;
    location: string;
    desc: string;
}

const LiveFeed = () => {
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

    useEffect(() => {
        // Generate updates for past months
        const generatePastUpdates = (): FeedItem[] => {
            return [
                {
                    id: 1,
                    icon: 'profit',
                    title: "November Profit Distributed",
                    time: "December 1, 2025",
                    location: "Savar Model Farm",
                    desc: "Monthly profit of ৳12,500 has been credited to your account for November harvest."
                },
                {
                    id: 2,
                    icon: 'harvest',
                    title: "Rice Harvest Completed",
                    time: "November 25, 2025",
                    location: "Gazipur Orchard",
                    desc: "Aman rice harvest completed successfully. Total yield: 850kg from your land."
                },
                {
                    id: 3,
                    icon: 'irrigation',
                    title: "October Profit Credited",
                    time: "November 1, 2025",
                    location: "All Properties",
                    desc: "Monthly lease profit of ৳11,800 deposited for October farming activities."
                },
                {
                    id: 4,
                    icon: 'planting',
                    title: "Winter Crop Plantation",
                    time: "October 20, 2025",
                    location: "Comilla Project",
                    desc: "Potato and mustard seeds planted. Expected harvest in January 2026."
                },
                {
                    id: 5,
                    icon: 'profit',
                    title: "September Profit Distributed",
                    time: "October 1, 2025",
                    location: "Savar Model Farm",
                    desc: "Quarterly bonus included! Total credit: ৳15,200 for excellent yield."
                },
                {
                    id: 6,
                    icon: 'harvest',
                    title: "Jute Harvest Season End",
                    time: "September 15, 2025",
                    location: "Gazipur Orchard",
                    desc: "Jute harvest completed with 20% higher yield than projected."
                },
                {
                    id: 7,
                    icon: 'irrigation',
                    title: "August Profit Credited",
                    time: "September 1, 2025",
                    location: "All Properties",
                    desc: "Monthly profit of ৳10,500 credited for August operations."
                },
                {
                    id: 8,
                    icon: 'planting',
                    title: "Monsoon Crops Thriving",
                    time: "August 10, 2025",
                    location: "Comilla Project",
                    desc: "Rice paddies showing excellent growth. Irrigation systems working optimally."
                }
            ];
        };

        setFeedItems(generatePastUpdates());
    }, []);

    const getIcon = (iconType: string) => {
        switch (iconType) {
            case 'harvest':
                return <Sprout className="w-5 h-5 text-green-600" />;
            case 'irrigation':
                return <Droplets className="w-5 h-5 text-blue-600" />;
            case 'planting':
                return <CheckCircle className="w-5 h-5 text-emerald-600" />;
            case 'profit':
                return <TrendingUp className="w-5 h-5 text-forest-green" />;
            default:
                return <Activity className="w-5 h-5 text-gray-600" />;
        }
    };

    const getIconBg = (iconType: string) => {
        switch (iconType) {
            case 'harvest':
                return 'bg-green-100';
            case 'irrigation':
                return 'bg-blue-100';
            case 'planting':
                return 'bg-emerald-100';
            case 'profit':
                return 'bg-forest-green/10';
            default:
                return 'bg-gray-100';
        }
    };

    return (
        <GlassCard className="h-full flex flex-col min-h-[500px]">
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-forest-green flex items-center gap-2">
                    <Activity className="w-5 h-5" /> Live Updates
                </h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {feedItems.map((item) => (
                    <div key={item.id} className="bg-white/50 rounded-xl p-4 border border-white/60 shadow-sm hover:shadow-md transition-all hover:bg-white/70">
                        <div className="flex gap-3">
                            <div className={`w-10 h-10 rounded-full ${getIconBg(item.icon)} flex items-center justify-center shrink-0`}>
                                {getIcon(item.icon)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start gap-2 mb-1">
                                    <h3 className="font-bold text-forest-green text-sm leading-tight">{item.title}</h3>
                                </div>
                                <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {item.time}
                                </p>
                                <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> {item.location}
                                </p>
                                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default LiveFeed;
