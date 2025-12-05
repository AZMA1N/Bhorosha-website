import { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { CountUp } from '../components/ui/CountUp';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Sprout, MapPin } from 'lucide-react';
import { baseRates, districtRates, districtsByDivision, typeMultipliers } from '../data/locationData';

const ROICalculator = () => {
    const [landSize, setLandSize] = useState<number>(10);
    const [location, setLocation] = useState<string>('Dhaka');
    const [district, setDistrict] = useState<string>('Dhaka');
    const [landType, setLandType] = useState<string>('Agricultural');
    const [estimatedMonthly, setEstimatedMonthly] = useState<number>(0);
    const [estimatedYearly, setEstimatedYearly] = useState<number>(0);

    useEffect(() => {
        const calculateROI = () => {
            // Use district rate if available, otherwise fallback to division rate, otherwise default
            const baseRate = districtRates[district] || baseRates[location] || 3000;
            const multiplier = typeMultipliers[landType] || 1.0;

            // Monthly calculation: Size * Rate * Multiplier
            const monthly = landSize * baseRate * multiplier;
            const yearly = monthly * 12;

            setEstimatedMonthly(monthly);
            setEstimatedYearly(yearly);
        };

        calculateROI();
    }, [landSize, location, district, landType]);

    return (
        <div className="min-h-screen bg-off-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">ROI Calculator</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Estimate the potential earnings from your land with Bhorosha's advanced agricultural management.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Input Section */}
                    <GlassCard className="p-8">
                        <h2 className="text-2xl font-bold text-forest-green mb-6 flex items-center gap-2">
                            <Calculator className="w-6 h-6" /> Land Details
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Land Size (Decimals)
                                </label>
                                <input
                                    type="number"
                                    value={landSize}
                                    onChange={(e) => setLandSize(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all"
                                    min="1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Division
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <select
                                        value={location}
                                        onChange={(e) => {
                                            setLocation(e.target.value);
                                            setDistrict(districtsByDivision[e.target.value][0]);
                                        }}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all appearance-none bg-white"
                                    >
                                        {Object.keys(baseRates).map(loc => (
                                            <option key={loc} value={loc}>{loc}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    District
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <select
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all appearance-none bg-white"
                                    >
                                        {districtsByDivision[location]?.map(dist => (
                                            <option key={dist} value={dist}>{dist}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Land Type
                                </label>
                                <div className="relative">
                                    <Sprout className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <select
                                        value={landType}
                                        onChange={(e) => setLandType(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all appearance-none bg-white"
                                    >
                                        {Object.keys(typeMultipliers).map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Result Section */}
                    <div className="space-y-6">
                        <div className="relative rounded-3xl overflow-hidden h-full min-h-[500px] shadow-2xl">
                            {/* Background Image */}
                            <img
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                                alt="Lush Field"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-forest-green/90 backdrop-blur-[2px]"></div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center text-white">
                                <p className="text-green-100 text-lg mb-2 font-medium">Estimated Monthly Earning</p>
                                <h3 className="text-5xl font-bold mb-8 drop-shadow-lg">
                                    <CountUp value={estimatedMonthly} prefix="৳ " />
                                </h3>

                                <div className="w-full h-px bg-white/30 mb-8"></div>

                                <p className="text-green-100 text-lg mb-2 font-medium">Estimated Yearly Earning</p>
                                <h3 className="text-4xl font-bold mb-8 text-white/90 drop-shadow-lg">
                                    <CountUp value={estimatedYearly} prefix="৳ " />
                                </h3>

                                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex items-center justify-center gap-3 border border-white/30">
                                    <TrendingUp className="w-5 h-5 text-green-300" />
                                    <span className="text-sm font-medium">
                                        Projected Land Appreciation: <span className="text-green-300 font-bold">+5-8% / Year</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" onClick={() => window.location.href = '/list-land'}>
                        Start Earning Now
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                        * Estimates are based on current market rates and optimal farming conditions. Actual returns may vary.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
