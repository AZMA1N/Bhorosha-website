import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Phone, Mail, Lock, User, Shield } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [activeTab, setActiveTab] = useState<'landowner' | 'admin'>('landowner');
    const [isLoading, setIsLoading] = useState(false);

    // Form states
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const payload: any = {
                password,
                role: activeTab === 'landowner' ? 'LANDOWNER' : 'ADMIN'
            };

            if (activeTab === 'landowner') {
                // Landowner: Username OR Email
                if (username) payload.username = username;
                if (email) payload.email = email;
            } else {
                // Admin: Email OR Phone
                if (email) payload.email = email;
                if (phone) payload.phone = phone;
            }

            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await response.json();

            if (response.ok) {
                if (activeTab === 'landowner') {
                    navigate('/dashboard');
                } else {
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Username or Email</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Username or Email"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (val.includes('@')) {
                                                    setEmail(val);
                                                    setUsername('');
                                                } else {
                                                    setUsername(val);
                                                    setEmail('');
                                                }
                                            }}
                                            required
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Email or Phone"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (val.includes('@')) {
                                                    setEmail(val);
                                                    setPhone('');
                                                } else {
                                                    setPhone(val);
                                                    setEmail('');
                                                }
                                            }}
                                            required
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            isLoading={isLoading}
                        >
                            Login to {activeTab === 'landowner' ? 'Dashboard' : 'Admin Panel'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-forest-green font-semibold hover:underline">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default Login;
