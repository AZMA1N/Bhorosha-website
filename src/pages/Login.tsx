import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Phone, Mail, Lock, User, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [activeTab, setActiveTab] = useState<'landowner' | 'admin'>('landowner');
    const [isLoading, setIsLoading] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(false); // State to control OTP input visibility
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: activeTab === 'landowner' ? phone : undefined,
                    email: activeTab === 'admin' ? email : undefined,
                    password: activeTab === 'admin' ? password : undefined, // Add password for admin
                    role: activeTab === 'landowner' ? 'LANDOWNER' : 'ADMIN'
                }),
            });
            const data = await response.json();

            if (response.ok) {
                if (activeTab === 'landowner') {
                    // For landowner, we expect OTP step next, but for now mocking direct login or OTP flow
                    // If backend sends OTP, we should show OTP input.
                    // Assuming backend mocks OTP for now and returns success or requires OTP verification.
                    // Let's assume for this demo we just redirect or show OTP input.
                    // If the backend returns "otpSent": true, we would switch to OTP view.
                    // For simplicity in this iteration, let's assume direct login for demo or handle OTP if I implemented it.
                    // Looking at authController, it sends otpSent: true.
                    setShowOtp(true); // Show OTP input for landowner
                } else {
                    // Admin login success
                    navigate('/admin');
                }
            } else {
                alert(data.error || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, otp }),
            });
            const data = await response.json();

            if (response.ok) {
                navigate('/dashboard');
            } else {
                alert(data.error || 'Invalid OTP');
            }
        } catch (error) {
            console.error('OTP error:', error);
            alert('Verification failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-off-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-forest-green/10 to-transparent" />
            </div>

            <div className="container mx-auto px-4 z-10">
                <GlassCard className="max-w-md mx-auto backdrop-blur-xl" float>
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-forest-green mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Access your Bhorosha account</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex p-1 bg-gray-100/50 rounded-xl mb-8">
                        <button
                            onClick={() => setActiveTab('landowner')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'landowner'
                                ? 'bg-white text-forest-green shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <User className="w-4 h-4" /> Landowner
                        </button>
                        <button
                            onClick={() => setActiveTab('admin')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'admin'
                                ? 'bg-white text-forest-green shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Shield className="w-4 h-4" /> Admin
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        {activeTab === 'landowner' ? (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                key="landowner"
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder="+880 1XXX XXXXXX"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className="text-gray-400 text-sm">Or login with</span>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                key="admin"
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Admin Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="admin@bhorosha.com"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                            required
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            isLoading={isLoading}
                        >
                            {activeTab === 'landowner' ? 'Send OTP' : 'Login to Dashboard'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Don't have an account?{' '}
                            <a href="#" className="text-forest-green font-semibold hover:underline">
                                List your land
                            </a>
                        </p>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default Login;
