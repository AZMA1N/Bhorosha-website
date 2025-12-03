import { useState, useEffect } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Activity, MapPin, Clock } from 'lucide-react';

const LiveFeed = () => {
    const [feedItems, setFeedItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/landowner/dashboard`);
                const data = await response.json();
                // Transform backend feed to match UI structure if needed
                // For now assuming backend returns compatible structure or using mock fallback
                if (data.feed && data.feed.length > 0) {
                    setFeedItems(data.feed);
                } else {
                    // Fallback to mock data if empty
                    setFeedItems([
                        {
                            id: 1,
                            image: "/assets/dashboard/potato_harvest.png",
                            title: "Potato Harvest Started",
                            time: "2 hours ago",
                            location: "Savar Model Farm",
                            desc: "Potato harvest has begun. Yield looks promising, estimated 20% increase."
                        },
                        {
                            id: 2,
                            image: "/assets/dashboard/irrigation.png",
                            title: "Irrigation System Check",
                            time: "5 hours ago",
                            location: "Gazipur Orchard",
                            desc: "Routine check of the irrigation system completed. All systems nominal."
                        },
                        {
                            id: 3,
                            image: "/assets/dashboard/soil_testing.png",
                            title: "Soil Testing Complete",
                            time: "1 day ago",
                            location: "Comilla Project",
                            desc: "New batch of seasonal vegetables planted in Sector 3."
                        }
                    ]);
                }
            } catch (error) {
                console.error('Failed to fetch feed:', error);
                // Fallback to mock data on error
                setFeedItems([
                    {
                        id: 1,
                        image: "/assets/dashboard/potato_harvest.png",
                        title: "Potato Harvest Started",
                        time: "2 hours ago",
                        location: "Savar Model Farm",
                        desc: "Potato harvest has begun. Yield looks promising, estimated 20% increase."
                    },
                    {
                        id: 2,
                        image: "/assets/dashboard/irrigation.png",
                        title: "Irrigation System Check",
                        time: "5 hours ago",
                        location: "Gazipur Orchard",
                        desc: "Routine check of the irrigation system completed. All systems nominal."
                    },
                    {
                        id: 3,
                        image: "/assets/dashboard/soil_testing.png",
                        title: "Soil Testing Complete",
                        time: "1 day ago",
                        location: "Comilla Project",
                        desc: "New batch of seasonal vegetables planted in Sector 3."
                    }
                ]);
            }
        };
        fetchFeed();
    }, []);

    return (
        <GlassCard className="h-full flex flex-col min-h-[500px]">
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-forest-green flex items-center gap-2">
                    <Activity className="w-5 h-5" /> Live Updates
                </h3>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {feedItems.map((item) => (
                    <div key={item.id} className="bg-white/50 rounded-xl overflow-hidden border border-white/60 shadow-sm hover:shadow-md transition-all">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {item.time}
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-forest-green text-lg">{item.title}</h3>
                            </div>
                            <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> {item.location}
                            </p>
                            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                            <button className="text-forest-green text-sm font-semibold hover:underline">
                                View Full Report
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default LiveFeed;
