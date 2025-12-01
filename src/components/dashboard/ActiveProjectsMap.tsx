import { GlassCard } from '../ui/GlassCard';

const ActiveProjectsMap = () => {
    return (
        <GlassCard className="h-full min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10">
                <h3 className="text-lg font-bold text-forest-green">Active Projects</h3>
                <p className="text-sm text-gray-500">2 Locations Managed</p>
            </div>

            {/* Map Image Placeholder */}
            <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                alt="Map View"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Map Pins */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 group/pin">
                <div className="relative">
                    <div className="w-4 h-4 bg-forest-green rounded-full border-2 border-white animate-ping absolute inset-0" />
                    <div className="w-4 h-4 bg-forest-green rounded-full border-2 border-white relative z-10" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded-lg shadow-lg text-xs font-bold text-forest-green whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                        Savar Model Farm
                    </div>
                </div>
            </div>

            <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 group/pin">
                <div className="relative">
                    <div className="w-4 h-4 bg-forest-green rounded-full border-2 border-white animate-ping absolute inset-0 animation-delay-500" />
                    <div className="w-4 h-4 bg-forest-green rounded-full border-2 border-white relative z-10" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded-lg shadow-lg text-xs font-bold text-forest-green whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                        Gazipur Poultry
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

export default ActiveProjectsMap;
