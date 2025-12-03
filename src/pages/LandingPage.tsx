import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Sprout } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Navbar } from '../components/layout/Navbar';

const LandingPage = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

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
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
                        alt="Lush Farmland"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 z-10 relative">
                    <GlassCard className="max-w-2xl mx-auto text-center p-12 backdrop-blur-xl border-white/40" float>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-green mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        >
                            Stay Relieved, Optimize Your Land's Potential
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-dark-green/90 mb-8 font-medium"
                        >
                            Transform your idle land into a productive, passive income asset with Bhorosha's trusted management platform.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/roi-calculator">
                                <Button size="lg" className="bg-white text-forest-green hover:bg-white/90">
                                    Calculate Your Land's ROI <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </GlassCard>
                </div>

                {/* Floating Ticker */}
                <div className="absolute bottom-10 left-0 right-0 z-20 overflow-hidden py-4 bg-white/10 backdrop-blur-md border-y border-white/20">
                    <div className="flex justify-center gap-12 text-white font-semibold text-lg animate-pulse">
                        <span className="flex items-center gap-2"><Users className="w-5 h-5" /> 100+ Landowners</span>
                        <span className="flex items-center gap-2"><Sprout className="w-5 h-5" /> 330+ Acres Managed</span>
                        <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Forbes 30 Under 30 Honoree</span>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-24 bg-off-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-forest-green mb-6">From Idle to Ideal</h2>
                            <div className="space-y-6">
                                <GlassCard className="bg-red-50/50 border-red-100">
                                    <h3 className="text-xl font-semibold text-red-800 mb-2">The Problem: Idle Land</h3>
                                    <p className="text-gray-600">Unused land incurs maintenance costs, risks encroachment, and generates zero value.</p>
                                </GlassCard>
                                <div className="flex justify-center">
                                    <ArrowRight className="w-8 h-8 text-forest-green rotate-90 md:rotate-0" />
                                </div>
                                <GlassCard className="bg-green-50/50 border-green-100">
                                    <h3 className="text-xl font-semibold text-forest-green mb-2">The Solution: Productive Asset</h3>
                                    <p className="text-gray-600">Bhorosha transforms it into a thriving farm, generating weekly profits and increasing land value.</p>
                                </GlassCard>
                            </div>
                        </motion.div>
                        <motion.div
                            style={{ y: y2 }}
                            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                                alt="Transformation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="text-sm uppercase tracking-wider mb-2">Live Project</p>
                                    <h3 className="text-3xl font-bold">Savar Model Farm</h3>
                                    <p className="mt-2 text-white/80">Yielding 25% above market average</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-gradient-to-b from-off-white to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-forest-green mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600">Four simple steps to passive income</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Users className="w-8 h-8" />, title: "List Land", desc: "Submit your land details for verification." },
                            { icon: <ShieldCheck className="w-8 h-8" />, title: "Verification", desc: "Our experts assess soil and legal status." },
                            { icon: <Sprout className="w-8 h-8" />, title: "Farming Starts", desc: "We deploy resources and start cultivation." },
                            { icon: <TrendingUp className="w-8 h-8" />, title: "Get Weekly Profits", desc: "Track growth and receive earnings." }
                        ].map((step, index) => (
                            <GlassCard key={index} hoverEffect className="text-center h-full">
                                <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-green">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-forest-green mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
