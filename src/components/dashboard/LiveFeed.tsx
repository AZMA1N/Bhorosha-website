import { GlassCard } from '../ui/GlassCard';
import { Calendar, Clock } from 'lucide-react';

const LiveFeed = () => {
    const updates = [
        {
            id: 1,
            title: "Harvest Started",
            location: "Savar Model Farm",
            time: "2 hours ago",
            image: "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?q=80&w=2070&auto=format&fit=crop",
            desc: "Potato harvest has begun. Yield looks promising, estimated 20% increase."
        },
        {
            id: 2,
            title: "Irrigation Maintenance",
            location: "Gazipur Poultry",
            time: "1 day ago",
            image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2071&auto=format&fit=crop",
            desc: "Routine check of the irrigation system completed. All systems nominal."
        },
        {
            id: 3,
            title: "Seedling Plantation",
            location: "Savar Model Farm",
            time: "3 days ago",
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop",
            desc: "New batch of seasonal vegetables planted in Sector 3."
        }
    ];

    return (
        <div className="grid md:grid-cols-3 gap-6">
            {updates.map((update) => (
                <GlassCard key={update.id} hoverEffect className="p-0 overflow-hidden flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative">
                        <img
                            src={update.image}
                            alt={update.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {update.time}
                        </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-forest-green text-lg">{update.title}</h3>
                        </div>
                        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {update.location}
                        </p>
                        <p className="text-gray-600 text-sm mb-4 flex-1">{update.desc}</p>
                        <button className="text-forest-green text-sm font-semibold hover:underline mt-auto self-start">
                            View Full Report
                        </button>
                    </div>
                </GlassCard>
            ))}
        </div>
    );
};

export default LiveFeed;
