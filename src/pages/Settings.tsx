import { DashboardLayout } from '../components/layout/DashboardLayout';
import LiveFeed from '../components/dashboard/LiveFeed';
import { GlassCard } from '../components/ui/GlassCard';
import { User, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Settings = () => {
    return (
        <DashboardLayout>
            <header className="mb-8">
                <h1 className="page-title">Settings</h1>
                <p className="page-subtitle">Manage your account preferences</p>
            </header>

            <div className="grid grid-cols-12 gap-6">
                {/* Settings Form - Spans 8 columns */}
                <div className="col-span-12 md:col-span-8 space-y-6">
                    <GlassCard className="p-6">
                        <h3 className="text-lg font-bold text-forest-green mb-4 flex items-center gap-2">
                            <User className="w-5 h-5" /> Profile Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" defaultValue="Samiur Rahman" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-forest-green outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" defaultValue="samiur@example.com" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-forest-green outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" defaultValue="+880 1712 345678" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-forest-green outline-none" />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button size="sm">Save Changes</Button>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h3 className="text-lg font-bold text-forest-green mb-4 flex items-center gap-2">
                            <Bell className="w-5 h-5" /> Notifications
                        </h3>
                        <div className="space-y-3">
                            {['Email Notifications', 'SMS Alerts', 'Weekly Reports'].map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-gray-700">{item}</span>
                                    <div className="w-10 h-6 bg-forest-green rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>

                {/* Live Feed - Spans 4 columns */}
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-xl font-bold text-forest-green mb-4">Account Activity</h2>
                    <LiveFeed />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Settings;
