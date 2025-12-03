import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { CheckCircle, Clock, ChevronDown, XCircle, Eye } from 'lucide-react';
import { useLandListings, type LandListing } from '../../context/LandListingsContext';

const LandListings = () => {
    const { listings, updateListingStatus, getPendingListings } = useLandListings();
    const [showPendingDropdown, setShowPendingDropdown] = useState(false);
    const [selectedListing, setSelectedListing] = useState<LandListing | null>(null);
    const [filter, setFilter] = useState<'all' | 'Pending' | 'Verified'>('all');

    const pendingListings = getPendingListings();
    const pendingCount = pendingListings.length;

    const filteredListings = filter === 'all' 
        ? listings 
        : listings.filter(l => l.status === filter);

    const handleApprove = (id: string) => {
        updateListingStatus(id, 'Verified');
        setSelectedListing(null);
    };

    const handleReject = (id: string) => {
        updateListingStatus(id, 'Rejected');
        setSelectedListing(null);
    };

    const formatLocation = (listing: LandListing) => {
        return `${listing.thana}, ${listing.district}`;
    };

    const formatSize = (listing: LandListing) => {
        const unitMap: Record<string, string> = {
            decimal: 'Dec',
            katha: 'Katha',
            bigha: 'Bigha',
            acre: 'Acres'
        };
        return `${listing.size} ${unitMap[listing.unit] || listing.unit}`;
    };

    return (
        <GlassCard className="h-full">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <h3 className="text-xl font-bold text-forest-green">Land Listings</h3>
                    
                    {/* Pending Listings Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowPendingDropdown(!showPendingDropdown)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                pendingCount > 0 
                                    ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' 
                                    : 'bg-gray-100 text-gray-500'
                            }`}
                        >
                            <Clock className="w-4 h-4" />
                            {pendingCount} Pending
                            <ChevronDown className={`w-4 h-4 transition-transform ${showPendingDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {showPendingDropdown && pendingCount > 0 && (
                            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
                                <div className="p-3 bg-yellow-50 border-b border-yellow-100">
                                    <p className="text-sm font-medium text-yellow-800">New Listings Awaiting Review</p>
                                </div>
                                <div className="max-h-64 overflow-y-auto">
                                    {pendingListings.map((listing) => (
                                        <div 
                                            key={listing.id}
                                            className="p-3 hover:bg-gray-50 border-b border-gray-100 last:border-0 cursor-pointer"
                                            onClick={() => {
                                                setSelectedListing(listing);
                                                setShowPendingDropdown(false);
                                            }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <img 
                                                    src={listing.image} 
                                                    alt={listing.id}
                                                    className="w-10 h-10 rounded-lg object-cover"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium text-gray-800 text-sm">{listing.id}</p>
                                                    <p className="text-xs text-gray-500 truncate">{formatLocation(listing)}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs font-medium text-gray-700">{formatSize(listing)}</p>
                                                    <p className="text-xs text-gray-400">{listing.ownerName}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Filter buttons */}
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setFilter('all')}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${filter === 'all' ? 'bg-forest-green text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        All
                    </button>
                    <button 
                        onClick={() => setFilter('Pending')}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${filter === 'Pending' ? 'bg-yellow-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        Pending
                    </button>
                    <button 
                        onClick={() => setFilter('Verified')}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${filter === 'Verified' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        Verified
                    </button>
                </div>
            </div>

            {/* Selected Listing Detail Modal */}
            {selectedListing && (
                <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <img 
                                src={selectedListing.image} 
                                alt={selectedListing.id}
                                className="w-16 h-16 rounded-xl object-cover shadow-md"
                            />
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">{selectedListing.id}</h4>
                                <p className="text-sm text-gray-600">{formatLocation(selectedListing)}</p>
                                <p className="text-xs text-gray-500">Submitted by: {selectedListing.ownerName}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setSelectedListing(null)}
                            className="p-1 hover:bg-blue-100 rounded"
                        >
                            <XCircle className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div>
                            <p className="text-gray-500">Size</p>
                            <p className="font-medium">{formatSize(selectedListing)}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Ownership</p>
                            <p className="font-medium capitalize">{selectedListing.ownershipType}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Dag No.</p>
                            <p className="font-medium">{selectedListing.dagNo}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Khatian No.</p>
                            <p className="font-medium">{selectedListing.khatianNo}</p>
                        </div>
                    </div>
                    {selectedListing.status === 'Pending' && (
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleApprove(selectedListing.id)}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                <CheckCircle className="w-4 h-4" />
                                Approve Listing
                            </button>
                            <button
                                onClick={() => handleReject(selectedListing.id)}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                <XCircle className="w-4 h-4" />
                                Reject Listing
                            </button>
                        </div>
                    )}
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                            <th className="pb-3 font-medium pl-2">Property</th>
                            <th className="pb-3 font-medium">Location</th>
                            <th className="pb-3 font-medium">Size</th>
                            <th className="pb-3 font-medium">Owner</th>
                            <th className="pb-3 font-medium">Status</th>
                            <th className="pb-3 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {filteredListings.map((listing) => (
                            <tr key={listing.id} className="border-b border-gray-100 last:border-0 hover:bg-white/50 transition-colors">
                                <td className="py-4 font-medium text-gray-800 pl-2">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={listing.image}
                                            alt={listing.id}
                                            className="w-10 h-10 rounded-lg object-cover shadow-sm"
                                        />
                                        <span>{listing.id}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-gray-600">{formatLocation(listing)}</td>
                                <td className="py-4 text-gray-600">{formatSize(listing)}</td>
                                <td className="py-4 text-gray-600">{listing.ownerName}</td>
                                <td className="py-4">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                        listing.status === 'Verified'
                                            ? 'bg-green-100 text-green-700'
                                            : listing.status === 'Rejected'
                                            ? 'bg-red-100 text-red-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                        {listing.status === 'Verified' ? <CheckCircle className="w-3 h-3" /> : 
                                         listing.status === 'Rejected' ? <XCircle className="w-3 h-3" /> :
                                         <Clock className="w-3 h-3" />}
                                        {listing.status}
                                    </span>
                                </td>
                                <td className="py-4">
                                    <button 
                                        onClick={() => setSelectedListing(listing)}
                                        className="p-1.5 hover:bg-gray-100 rounded flex items-center gap-1 text-forest-green"
                                    >
                                        <Eye className="w-4 h-4" />
                                        <span className="text-xs">View</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredListings.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    <p>No listings found</p>
                </div>
            )}
        </GlassCard>
    );
};

export default LandListings;
