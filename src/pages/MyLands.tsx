import { DashboardLayout } from '../components/layout/DashboardLayout';
import LiveFeed from '../components/dashboard/LiveFeed';
import { GlassCard } from '../components/ui/GlassCard';
import { MapPin, Ruler, FileText } from 'lucide-react';

const MyLands = () => {
    return (
        <DashboardLayout>
            <header className="mb-8">
                <h1 className="page-title">My Lands</h1>
                <p className="page-subtitle">Manage your registered properties</p>
            </header>

            <div className="grid grid-cols-12 gap-6">
                {/* Land List - Spans 8 columns */}
                <div className="col-span-12 md:col-span-8 space-y-6">
                    {[1, 2].map((id) => (
                        <GlassCard key={id} className="p-6 flex gap-6 items-center">
                            <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0">
                                <img
                                    src="/assets/dashboard/land_placeholder.png"
                                    alt="Land"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-forest-green">Savar Model Farm {id}</h3>
                                        <p className="text-gray-500 flex items-center gap-1 text-sm">
                                            <MapPin className="w-4 h-4" /> Savar, Dhaka
                                        </p>
                                    </div>
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        Active
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Ruler className="w-4 h-4" />
                                        <span>12.5 Decimals</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <FileText className="w-4 h-4" />
                                        <span>Dag: 123{id}</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Live Feed - Spans 4 columns */}
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-xl font-bold text-forest-green mb-4">Land Updates</h2>
                    <LiveFeed />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default MyLands;
