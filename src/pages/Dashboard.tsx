import Sidebar from '../components/dashboard/Sidebar';
import EarningsWidget from '../components/dashboard/EarningsWidget';
import ActiveProjectsMap from '../components/dashboard/ActiveProjectsMap';
import LiveFeed from '../components/dashboard/LiveFeed';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-off-white flex">
            <Sidebar />

            <main className="flex-1 ml-64 p-8">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-forest-green">Command Center</h1>
                        <p className="text-gray-600">Welcome back, Mr. Rahman</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="font-semibold text-forest-green">Samiur Rahman</p>
                            <p className="text-xs text-gray-500">Landowner ID: #BH-8821</p>
                        </div>
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <img src="https://ui-avatars.com/api/?name=Samiur+Rahman&background=1A4D2E&color=fff" alt="Profile" />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-6">
                    {/* Earnings Widget - Spans 4 columns */}
                    <div className="col-span-12 md:col-span-4">
                        <EarningsWidget />
                    </div>

                    {/* Active Projects Map - Spans 8 columns */}
                    <div className="col-span-12 md:col-span-8">
                        <ActiveProjectsMap />
                    </div>

                    {/* Live Feed - Spans 12 columns (or maybe split with something else) */}
                    <div className="col-span-12">
                        <h2 className="text-xl font-bold text-forest-green mb-4">Live Updates</h2>
                        <LiveFeed />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
