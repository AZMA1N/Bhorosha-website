import { GlassCard } from '../ui/GlassCard';
import { CheckCircle, Clock, MoreHorizontal } from 'lucide-react';

const listings = [
    { id: 'L-101', location: 'Savar, Dhaka', size: '50 Dec', owner: 'Samiur Rahman', status: 'Verified' },
    { id: 'L-102', location: 'Gazipur, Dhaka', size: '2 Acres', owner: 'Abul Kashem', status: 'Verified' },
    { id: 'L-103', location: 'Manikganj', size: '1.5 Acres', owner: 'Rahim Uddin', status: 'Pending' },
    { id: 'L-104', location: 'Comilla', size: '30 Dec', owner: 'Nasim Ahmed', status: 'Pending' },
];

const LandListings = () => {
    return (
        <GlassCard className="h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-forest-green">Land Listings</h3>
                <button className="text-sm text-forest-green font-semibold hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                            <th className="pb-3 font-medium">ID</th>
                            <th className="pb-3 font-medium">Location</th>
                            <th className="pb-3 font-medium">Size</th>
                            <th className="pb-3 font-medium">Owner</th>
                            <th className="pb-3 font-medium">Status</th>
                            <th className="pb-3 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {listings.map((listing) => (
                            <tr key={listing.id} className="border-b border-gray-100 last:border-0 hover:bg-white/50 transition-colors">
                                <td className="py-4 font-medium text-gray-800">{listing.id}</td>
                                <td className="py-4 text-gray-600">{listing.location}</td>
                                <td className="py-4 text-gray-600">{listing.size}</td>
                                <td className="py-4 text-gray-600">{listing.owner}</td>
                                <td className="py-4">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${listing.status === 'Verified'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {listing.status === 'Verified' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                                        {listing.status}
                                    </span>
                                </td>
                                <td className="py-4">
                                    <button className="p-1 hover:bg-gray-100 rounded">
                                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </GlassCard>
    );
};

export default LandListings;
