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
                            src="/assets/vision_roadmap.png"
                            alt="Vision Roadmap"
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
                            img: "/assets/team/wasee.jpg"
                        },
                        {
                            name: "AHM Marma Sun",
                            role: "Chief Operations Officer",
                            img: "/assets/team/marma.png"
                        },
                        {
                            name: "Ahnaf Tajwar Evan",
                            role: "Chief Marketing Officer",
                            img: "/assets/team/ahnaf.png"
                        },
                        {
                            name: "Samin Al Azmain Ahmed",
                            role: "Chief Technology Officer",
                            img: "/assets/team/samin.png"
                        }
                    ].map((member, idx) => (
                        <GlassCard key={idx} hoverEffect className="text-center p-8 h-full flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/50 shrink-0 shadow-lg">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-forest-green leading-tight mb-2">{member.name}</h3>
                            <p className="text-base font-semibold text-gray-600">{member.role}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
