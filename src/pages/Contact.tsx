import { Navbar } from '../components/layout/Navbar';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="min-h-screen bg-off-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-forest-green mb-6">Get in Touch</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions about listing your land or investing? Our team is here to help you every step of the way.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <GlassCard className="p-8">
                            <h3 className="text-2xl font-bold text-forest-green mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center text-forest-green">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">+880 1712 345 678</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center text-forest-green">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">support@bhorosha.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center text-forest-green">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Office</p>
                                        <p className="font-medium">Level 4, Gulshan 1, Dhaka</p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Contact Form */}
                    <GlassCard className="p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default Contact;
