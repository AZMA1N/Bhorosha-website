import { GlassCard } from '../ui/GlassCard';

interface DashboardHeaderProps {
    user: {
        name: string;
        role: string;
        id: string;
        avatar?: string;
    } | null;
}

const DashboardHeader = ({ user }: DashboardHeaderProps) => {
    if (!user) return null;

    return (
        <header className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-forest-green">Command Center</h1>
                <p className="text-gray-600">Welcome back, {user.name.split(' ')[0]}</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                    <p className="font-semibold text-forest-green">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.role} ID: #{user.id}</p>
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                        src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=1A4D2E&color=fff`}
                        alt="Profile"
                    />
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
