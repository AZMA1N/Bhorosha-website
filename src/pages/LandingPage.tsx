import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Sprout, MoveDown } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { ImageSlideshow, type SlideImage } from '../components/ui/ImageSlideshow';

// Slideshow images - 5 pond, 2 millet, 2 mushroom, 1 micro green, 1 cashewnut apple
const slideshowImages: SlideImage[] = [
    {
        id: 1,
        src: "/images/Pond.webp",
        title: "Premium Fish Pond",
        category: "Pond",
        description: "High-yield aquaculture opportunity"
    },
    {
        id: 2,
        src: "/images/Pond1.avif",
        title: "Commercial Fishery",
        category: "Pond",
        description: "Large-scale pond for tilapia and catfish"
    },
    {
        id: 3,
        src: "/images/Pond03.webp",
        title: "Organic Fish Farm",
        category: "Pond",
        description: "Eco-friendly pond with natural systems"
    },
    {
        id: 4,
        src: "/images/Pond.webp",
        title: "Shrimp Cultivation Pond",
        category: "Pond",
        description: "Specialized brackish water pond"
    },
    {
        id: 5,
        src: "/images/Pond1.avif",
        title: "Mixed Aquaculture Pond",
        category: "Pond",
        description: "Integrated fish and vegetable system"
    },
    {
        id: 6,
        src: "/images/Millet.jpg",
        title: "Golden Millet Field",
        category: "Millet",
        description: "Drought-resistant millet cultivation"
    },
    {
        id: 7,
        src: "/images/Millet01.jpg",
        title: "Organic Millet Farm",
        category: "Millet",
        description: "Certified organic millet production"
    },
    {
        id: 8,
        src: "/images/image-127329-1685006449.webp",
        title: "Cornfield",
        category: "Maze",
        description: "Corn cultivation"
    },
    {
        id: 9,
        src: "/images/garlic.jpg",
        title: "Garlic Farm",
        category: "Garlic",
        description: "Premium garlic production"
    },
    {
        id: 10,
        src: "/images/microgreen-problems.webp",
        title: "Microgreens Production",
        category: "Micro Green",
        description: "Urban farming with rapid harvest"
    },
    {
        id: 11,
        src: "/images/Sunflower.jpg",
        title: "Cashew Nut Orchard",
        category: "Cashewnut Apple",
        description: "Mature cashew plantation"
    },
];

const LandingPage = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    
    // Ref for Problem/Solution section scroll tracking
    const problemSolutionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: sectionProgress } = useScroll({
        target: problemSolutionRef,
        offset: ["start end", "end start"]
    });
    
    // Transform values for Problem card (shrinks as you scroll)
    const problemScale = useTransform(sectionProgress, [0.2, 0.5], [1, 0.85]);
    const problemOpacity = useTransform(sectionProgress, [0.2, 0.5], [1, 0.7]);
    
    // Transform values for Solution card (grows as you scroll)
    const solutionScale = useTransform(sectionProgress, [0.3, 0.6], [0.9, 1.05]);
    const solutionOpacity = useTransform(sectionProgress, [0.3, 0.6], [0.8, 1]);
    
    // Arrow animation (slides down from problem to solution)
    const arrowY = useTransform(sectionProgress, [0.2, 0.5], [-10, 70]);
    const arrowScale = useTransform(sectionProgress, [0.2, 0.35, 0.5], [1, 1.4, 1]);

    return (
        <div className="min-h-screen overflow-hidden">
            <Navbar />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/images/image-1764828172958.png"
                        alt="Farmer in Field"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>

                {/* Hero Content - Clean centered text */}
                <div className="container mx-auto px-4 z-10 relative text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight"
                        style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.3)' }}
                    >
                        PUT YOUR LAND<br />TO WORK
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium italic"
                        style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.3)' }}
                    >
                        Unlock New Revenue Streams—<br />
                        Transform Idle Land into a Thriving Farm with Bhorosha
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link to="/roi-calculator">
                            <motion.button 
                                className="relative px-10 py-4 text-lg font-semibold text-white rounded-full overflow-hidden backdrop-blur-xl bg-white/10 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-500"
                                animate={{ 
                                    y: [0, -8, 0],
                                    boxShadow: [
                                        "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                                        "0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                                        "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)"
                                    ]
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Calculate Your ROI
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                                {/* Frost/Glass overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-white/20 pointer-events-none" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Trust Badges Ticker */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="absolute bottom-8 left-0 right-0 z-10"
                >
                    <div className="flex justify-center gap-4 flex-wrap px-4">
                        <div className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/30 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]">
                            <ShieldCheck className="w-5 h-5 text-white/90" />
                            <span className="text-white/90 font-medium">Trusted by STARTUP BANGLADESH LTD</span>
                        </div>
                        <div className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/30 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]">
                            <ShieldCheck className="w-5 h-5 text-white/90" />
                            <span className="text-white/90 font-medium">Supported by ICT Ministry</span>
                        </div>
                        <div className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/30 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]">
                            <Users className="w-5 h-5 text-white/90" />
                            <span className="text-white/90 font-medium">10+ Landowners Onboard</span>
                        </div>
                        <div className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/30 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]">
                            <Sprout className="w-5 h-5 text-white/90" />
                            <span className="text-white/90 font-medium">100+ Acres Covered</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-24 relative overflow-hidden" ref={problemSolutionRef}>
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/Corn.webp"
                        alt="Agricultural field"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Title - Left Aligned with Cards */}
                            <h2 className="inline-block text-5xl md:text-6xl font-extrabold text-emerald-800 px-8 py-4 mb-8 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]">
                                From Idle to Ideal
                            </h2>
                            <div className="space-y-6">
                                {/* Problem Card - Frosted Liquid Glass with Scroll Animation */}
                                <motion.div 
                                    className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] origin-top"
                                    style={{ scale: problemScale, opacity: problemOpacity }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-white/20 pointer-events-none" />
                                    <h3 className="relative z-10 text-3xl md:text-4xl font-bold text-red-400 mb-3">The Problem: Idle Land</h3>
                                    <p className="relative z-10 text-lg md:text-xl text-white/90">Unused land incurs maintenance costs, risks encroachment, and generates zero value.</p>
                                </motion.div>
                                {/* Animated Arrow - Slides from Problem to Solution */}
                                <motion.div 
                                    className="flex justify-center py-2"
                                    style={{ y: arrowY }}
                                >
                                    <motion.div 
                                        style={{ scale: arrowScale }}
                                        className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                                    >
                                        <MoveDown className="w-12 h-12" />
                                    </motion.div>
                                </motion.div>
                                {/* Solution Card - Frosted Liquid Glass with Scroll Animation */}
                                <motion.div 
                                    className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] origin-bottom"
                                    style={{ scale: solutionScale, opacity: solutionOpacity }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-white/20 pointer-events-none" />
                                    <h3 className="relative z-10 text-3xl md:text-4xl font-bold text-green-400 mb-3">The Solution: Productive Asset</h3>
                                    <p className="relative z-10 text-lg md:text-xl text-white/90">Bhorosha transforms it into a thriving farm, generating weekly profits and increasing land value.</p>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            style={{ y: y2 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <ImageSlideshow images={slideshowImages} autoPlayInterval={4000} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/image-1764828223105.png"
                        alt="Rice Field Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-forest-green mb-4 drop-shadow-sm">How It Works</h2>
                        <p className="text-xl text-gray-700 font-medium">Four simple steps to passive income</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Users className="w-8 h-8" />, title: "List Land", desc: "Submit your land details for verification." },
                            { icon: <ShieldCheck className="w-8 h-8" />, title: "Verification", desc: "Our experts assess soil and legal status." },
                            { icon: <Sprout className="w-8 h-8" />, title: "Farming Starts", desc: "We deploy resources and start cultivation." },
                            { icon: <TrendingUp className="w-8 h-8" />, title: "Get Weekly Profits", desc: "Track growth and receive earnings." }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                animate={{ 
                                    y: [0, -10, 0],
                                }}
                                style={{
                                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                                    animationDelay: `${index * 0.2}s`
                                }}
                                className="group"
                            >
                                <div className="h-full p-8 rounded-3xl text-center
                                    bg-white/30 backdrop-blur-xl
                                    border border-white/50
                                    shadow-[0_8px_32px_rgba(31,38,135,0.15)]
                                    hover:bg-white/50 hover:shadow-[0_8px_32px_rgba(31,38,135,0.25)]
                                    hover:border-white/70 hover:-translate-y-2
                                    transition-all duration-500 ease-out
                                ">
                                    <div className="w-16 h-16 bg-forest-green/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 text-forest-green border border-forest-green/20 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-forest-green mb-3">{step.title}</h3>
                                    <p className="text-gray-700">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
