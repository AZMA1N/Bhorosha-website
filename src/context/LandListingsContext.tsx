import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface LandListing {
    id: string;
    district: string;
    thana: string;
    mouza: string;
    size: string;
    unit: string;
    ownershipType: string;
    dagNo: string;
    khatianNo: string;
    status: 'Pending' | 'Verified' | 'Rejected';
    ownerName: string;
    submittedAt: string;
    image: string;
}

interface LandListingsContextType {
    listings: LandListing[];
    addListing: (listing: Omit<LandListing, 'id' | 'status' | 'submittedAt' | 'image'>) => void;
    updateListingStatus: (id: string, status: LandListing['status']) => void;
    getPendingListings: () => LandListing[];
    getVerifiedListings: () => LandListing[];
}

const LandListingsContext = createContext<LandListingsContextType | undefined>(undefined);

const STORAGE_KEY = 'bhorosha_land_listings';

// Default sample listings
const defaultListings: LandListing[] = [
    {
        id: 'L-101',
        district: 'Dhaka',
        thana: 'Savar',
        mouza: 'Amin Bazar',
        size: '50',
        unit: 'decimal',
        ownershipType: 'single',
        dagNo: '1234',
        khatianNo: '5678',
        status: 'Verified',
        ownerName: 'Samiur Rahman',
        submittedAt: '2025-11-28T10:00:00Z',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=100&auto=format&fit=crop'
    },
    {
        id: 'L-102',
        district: 'Dhaka',
        thana: 'Gazipur',
        mouza: 'Tongi',
        size: '2',
        unit: 'acre',
        ownershipType: 'joint',
        dagNo: '2345',
        khatianNo: '6789',
        status: 'Verified',
        ownerName: 'Abul Kashem',
        submittedAt: '2025-11-25T14:30:00Z',
        image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?q=80&w=100&auto=format&fit=crop'
    },
];

// Random land images for new listings
const landImages = [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598512752271-33f913a5af13?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1536630596251-b82f1409595a?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1623227866882-c005c207758f?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=100&auto=format&fit=crop',
];

export const LandListingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [listings, setListings] = useState<LandListing[]>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    return JSON.parse(stored);
                } catch {
                    return defaultListings;
                }
            }
        }
        return defaultListings;
    });

    // Persist to localStorage whenever listings change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
    }, [listings]);

    const addListing = (listingData: Omit<LandListing, 'id' | 'status' | 'submittedAt' | 'image'>) => {
        const newListing: LandListing = {
            ...listingData,
            id: `L-${Date.now().toString().slice(-4)}`,
            status: 'Pending',
            submittedAt: new Date().toISOString(),
            image: landImages[Math.floor(Math.random() * landImages.length)],
        };
        setListings(prev => [newListing, ...prev]);
    };

    const updateListingStatus = (id: string, status: LandListing['status']) => {
        setListings(prev =>
            prev.map(listing =>
                listing.id === id ? { ...listing, status } : listing
            )
        );
    };

    const getPendingListings = () => listings.filter(l => l.status === 'Pending');
    const getVerifiedListings = () => listings.filter(l => l.status === 'Verified');

    return (
        <LandListingsContext.Provider value={{
            listings,
            addListing,
            updateListingStatus,
            getPendingListings,
            getVerifiedListings,
        }}>
            {children}
        </LandListingsContext.Provider>
    );
};

export const useLandListings = () => {
    const context = useContext(LandListingsContext);
    if (!context) {
        throw new Error('useLandListings must be used within a LandListingsProvider');
    }
    return context;
};
