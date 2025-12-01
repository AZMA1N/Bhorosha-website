import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { UserCheck, Gavel, CloudSun } from 'lucide-react';

const experts = [
    { id: 1, name: "Dr. Rahim", type: "Agriculture", assigned: 12 },
    { id: 2, name: "Adv. Karim", type: "Legal", assigned: 5 },
    { id: 3, name: "Met. Office", type: "Weather", assigned: 45 },
];

const ResourceManagement = () => {
    const [activeTab, setActiveTab] = useState('agriculture');

    return (
        <GlassCard className="h-full">
            <h3 className="text-xl font-bold text-forest-green mb-6">Resource Management</h3>

            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setActiveTab('agriculture')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'agriculture' ? 'bg-forest-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    Agriculture
                </button>
                <button
                    onClick={() => setActiveTab('legal')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'legal' ? 'bg-forest-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    Legal
                </button>
                <button
                    onClick={() => setActiveTab('weather')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'weather' ? 'bg-forest-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    Weather
                </button>
            </div>

            <div className="space-y-4">
                {experts.map((expert) => (
                    <div key={expert.id} className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center text-forest-green">
                                {expert.type === 'Agriculture' && <UserCheck className="w-5 h-5" />}
                                {expert.type === 'Legal' && <Gavel className="w-5 h-5" />}
                                {expert.type === 'Weather' && <CloudSun className="w-5 h-5" />}
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">{expert.name}</h4>
                                <p className="text-xs text-gray-500">{expert.assigned} Projects Assigned</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline">Assign</Button>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default ResourceManagement;
