import { Navbar } from '../components/layout/Navbar';
import { GlassCard } from '../components/ui/GlassCard';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-off-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-forest-green mb-6">Our Mission</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        To revolutionize agriculture in Bangladesh by connecting landowners with modern farming expertise, ensuring food security and economic growth.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <GlassCard className="p-8">
                        <h2 className="text-2xl font-bold text-forest-green mb-4">The Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We envision a future where every inch of arable land in Bangladesh is optimized for sustainable agriculture. By bridging the gap between land ownership and agricultural management, we aim to create a thriving ecosystem that benefits landowners, farmers, and the nation.
                        </p>
                    </GlassCard>
                    <div className="rounded-3xl overflow-hidden shadow-xl h-80">
                        <img
                            src="https://images.unsplash.com/photo-1595838788869-22a3c0a11616?q=80&w=2070&auto=format&fit=crop"
                            alt="Vision"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-forest-green text-center mb-12">Meet the Team</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        {
                            name: "Wasee Ahmed Bhuiyan",
                            role: "Co Founder",
                            subRole: "Certified Supply Chain Analyst",
                            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                        },
                        {
                            name: "AHM Marma Sun",
                            role: "Chief Operations Officer",
                            subRole: "Certified Supply Chain Analyst",
                            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                        },
                        {
                            name: "Ahnaf Tajwar Evan",
                            role: "Chief Marketing Officer",
                            subRole: "Business Development Executive",
                            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                        },
                        {
                            name: "Samin Al Azmain Ahmed",
                            role: "Chief Technology Officer",
                            subRole: "CSE Background",
                            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
                        }
                    ].map((member, idx) => (
                        <GlassCard key={idx} hoverEffect className="text-center p-6 h-full flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white/50 shrink-0">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-lg font-bold text-forest-green leading-tight mb-1">{member.name}</h3>
                            <p className="text-sm font-semibold text-gray-600">{member.role}</p>
                            <p className="text-xs text-gray-500 mt-1">{member.subRole}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
