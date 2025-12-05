import { GlassCard } from '../ui/GlassCard';
import { MapPin } from 'lucide-react';

const EarningsWidget = () => {
    return (
        <GlassCard className="h-full p-0 overflow-hidden border-none">
            <div className="relative h-full min-h-[200px]">
                <img
                    src="/images/DSC_2379.JPG"
                    alt="Your Leased Land"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white font-bold text-xl mb-1">Your Land</h3>
                    <p className="text-white/80 text-sm flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> Savar Model Farm • 12.5 Acres
                    </p>
                </div>
            </div>
        </GlassCard>
    );
};

export default EarningsWidget;
