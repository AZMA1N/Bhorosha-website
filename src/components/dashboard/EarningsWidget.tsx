import { useState, useEffect } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { TrendingUp, DollarSign } from 'lucide-react';

const EarningsWidget = () => {
    const [earnings, setEarnings] = useState(0);

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/landowner/earnings`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setEarnings(data.earnings);
            } catch (error) {
                console.error('Failed to fetch earnings:', error);
                setEarnings(0);
            }
        };
        fetchEarnings();
    }, []);

    return (
        <GlassCard className="h-full bg-gradient-to-br from-forest-green to-[#0F3D2E] text-white border-none">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <p className="text-white/70 text-sm font-medium mb-1">Total Earnings</p>
                    <h3 className="text-3xl font-bold">৳ {earnings.toLocaleString()}</h3>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <DollarSign className="w-6 h-6 text-white" />
                </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +20%
                </span>
                <span className="text-xs text-white/60">vs last month</span>
            </div>

            {/* Simple Graph Visualization */}
            <div className="h-24 flex items-end gap-2 mt-auto">
                {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-white/20 rounded-t-sm hover:bg-white/40 transition-all cursor-pointer relative group"
                        style={{ height: `${height}%` }}
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-forest-green text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {height}k
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default EarningsWidget;
