import { Navbar } from '../components/layout/Navbar';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { ImageSlideshow, type SlideImage } from '../components/ui/ImageSlideshow';
import { motion } from 'framer-motion';
import { MapPin, Sprout, TrendingUp, Filter, ArrowRight, Heart, Search, Fish, Leaf, Wheat } from 'lucide-react';

// Slideshow images - 5 pond, 2 millet, 2 mushroom, 1 micro green, 1 cashewnut apple
const slideshowImages: SlideImage[] = [
    // Pond images (5)
    {
        id: 1,
        src: "/images/Pond.webp",
        title: "Premium Fish Pond",
        category: "Pond",
        description: "High-yield aquaculture opportunity with established fish farming infrastructure"
    },
    {
        id: 2,
        src: "/images/Pond1.avif",
        title: "Commercial Fishery",
        category: "Pond",
        description: "Large-scale pond suitable for tilapia, carp, and catfish farming"
    },
    {
        id: 3,
        src: "/images/Pond03.webp",
        title: "Organic Fish Farm",
        category: "Pond",
        description: "Eco-friendly pond with natural filtration systems"
    },
    {
        id: 4,
        src: "/images/Pond.webp",
        title: "Shrimp Cultivation Pond",
        category: "Pond",
        description: "Specialized brackish water pond for shrimp farming"
    },
    {
        id: 5,
        src: "/images/Pond1.avif",
        title: "Mixed Aquaculture Pond",
        category: "Pond",
        description: "Integrated fish and vegetable production system"
    },
    // Millet images (2)
    {
        id: 6,
        src: "/images/Millet.jpg",
        title: "Golden Millet Field",
        category: "Millet",
        description: "Drought-resistant millet cultivation with high nutritional value"
    },
    {
        id: 7,
        src: "/images/Millet01.jpg",
        title: "Organic Millet Farm",
        category: "Millet",
        description: "Certified organic millet production for health-conscious markets"
    },
    // Mushroom images (2) - using available images as placeholders
    {
        id: 8,
        src: "/images/image-127329-1685006449.webp",
        title: "Oyster Mushroom Farm",
        category: "Mushroom",
        description: "Indoor mushroom cultivation with controlled environment"
    },
    {
        id: 9,
        src: "/images/garlic.jpg",
        title: "Shiitake Mushroom House",
        category: "Mushroom",
        description: "Premium shiitake production for gourmet markets"
    },
    // Micro green (1)
    {
        id: 10,
        src: "/images/microgreen-problems.webp",
        title: "Microgreens Production",
        category: "Micro Green",
        description: "Urban farming microgreens with rapid harvest cycles"
    },
    // Cashewnut Apple (1)
    {
        id: 11,
        src: "/images/Sunflower.jpg",
        title: "Cashew Nut Orchard",
        category: "Cashewnut Apple",
        description: "Mature cashew plantation with fruit and nut production"
    },
];

const Marketplace = () => {
    const listings = [
        {
            id: 1,
            title: "Premium Mango Orchard",
            location: "Rajshahi",
            size: "50 Decimals",
            type: "Orchard",
            roi: "15-18%",
            price: "৳ 25,00,000",
            image: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Fertile Rice Paddy Field",
            location: "Dinajpur",
            size: "120 Decimals",
            type: "Agricultural",
            roi: "12-14%",
            price: "৳ 45,00,000",
            image: "https://images.unsplash.com/photo-1536630596251-b82f1409595a?q=80&w=2072&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Mixed Vegetable Farm",
            location: "Comilla",
            size: "30 Decimals",
            type: "Agricultural",
            roi: "18-22%",
            price: "৳ 18,00,000",
            image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=2069&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Litchi Garden Investment",
            location: "Pabna",
            size: "40 Decimals",
            type: "Orchard",
            roi: "14-16%",
            price: "৳ 22,00,000",
            image: "https://images.unsplash.com/photo-1623227866882-c005c207758f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Riverside Fallow Land",
            location: "Barisal",
            size: "80 Decimals",
            type: "Fallow",
            roi: "10-12%",
            price: "৳ 30,00,000",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"
                    alt="Marketplace Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white mt-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
                    >
                        Find Your Perfect Land
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md"
                    >
                        Explore verified agricultural opportunities with guaranteed returns and expert management.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-20 -mt-20 relative z-20">
                {/* Floating Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 mb-12 border border-white/50"
                >
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by location or type..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-forest-green/20 outline-none transition-all"
                            />
                        </div>

                        <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center">
                            <Button variant="outline" className="flex items-center gap-2 bg-white border-gray-200 hover:border-forest-green hover:text-forest-green">
                                <Filter className="w-4 h-4" /> Location
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2 bg-white border-gray-200 hover:border-forest-green hover:text-forest-green">
                                <Sprout className="w-4 h-4" /> Type
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2 bg-white border-gray-200 hover:border-forest-green hover:text-forest-green">
                                <TrendingUp className="w-4 h-4" /> ROI
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* What It Does Section with Slideshow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    {/* Category Icons */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                        <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100 hover:shadow-lg transition-shadow cursor-pointer">
                            <Fish className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <p className="text-sm font-medium text-blue-700">Ponds</p>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100 hover:shadow-lg transition-shadow cursor-pointer">
                            <Wheat className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                            <p className="text-sm font-medium text-amber-700">Millet Farms</p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center text-2xl">🍄</div>
                            <p className="text-sm font-medium text-purple-700">Mushroom</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100 hover:shadow-lg transition-shadow cursor-pointer">
                            <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <p className="text-sm font-medium text-green-700">Micro Green</p>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100 col-span-2 md:col-span-1 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center text-2xl">🥜</div>
                            <p className="text-sm font-medium text-orange-700">Cashewnut Apple</p>
                        </div>
                    </div>

                    {/* Image Slideshow */}
                    <ImageSlideshow images={slideshowImages} autoPlayInterval={5000} />
                </motion.div>

                {/* Listings Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Available Listings
                    </h2>
                    <span className="text-gray-500 text-sm">
                        {listings.length} properties found
                    </span>
                </div>

                {/* Listings Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map((listing, index) => (
                        <motion.div
                            key={listing.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col overflow-hidden p-0 group cursor-pointer hover:shadow-2xl transition-all duration-500 border-white/60">
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={listing.image}
                                        alt={listing.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="absolute top-4 left-4">
                                        <span className="bg-forest-green/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm uppercase tracking-wide">
                                            {listing.type}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-2xl font-bold">{listing.price}</p>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow bg-white/40 backdrop-blur-sm group-hover:bg-white/60 transition-colors">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-forest-green transition-colors line-clamp-1">
                                            {listing.title}
                                        </h3>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <MapPin className="w-4 h-4 mr-1 text-forest-green" /> {listing.location}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-white/60 rounded-xl p-3 border border-white/50">
                                            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Size</p>
                                            <p className="font-semibold text-gray-800">{listing.size}</p>
                                        </div>
                                        <div className="bg-green-50/80 rounded-xl p-3 border border-green-100">
                                            <p className="text-xs text-forest-green/70 mb-1 uppercase tracking-wider">Est. ROI</p>
                                            <p className="font-bold text-forest-green">{listing.roi}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-gray-200/50">
                                        <Button className="w-full group-hover:bg-forest-green group-hover:text-white transition-all">
                                            View Details <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
