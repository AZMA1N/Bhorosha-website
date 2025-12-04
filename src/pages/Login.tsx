import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Lock, User, Shield, Warehouse } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [activeTab, setActiveTab] = useState<'landowner' | 'landleaser' | 'admin'>('landowner');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    // Form states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { login, isAuthenticated, user } = useAuth();

    // Redirect if already logged in (but not during active login process)
    useEffect(() => {
        if (isAuthenticated && user && !isLoggingIn) {
            if (user.role === 'admin') {
                navigate('/admin');
            } else if (user.role === 'leaser') {
                navigate('/land-leaser');
            } else {
                navigate('/dashboard');
            }
        }
    }, [isAuthenticated, user, navigate, isLoggingIn]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsLoggingIn(true);
        setError('');

        // Small delay for UX
        await new Promise(resolve => setTimeout(resolve, 500));

        const result = login(username, password);

        if (result.success) {
            if (result.role === 'admin') {
                navigate('/admin');
            } else if (result.role === 'leaser' || activeTab === 'landleaser') {
                navigate('/land-leaser');
            } else {
                navigate('/dashboard');
            }
        } else {
            setError(result.message);
            setIsLoggingIn(false);
        }

        setIsLoading(false);
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

                    {/* Tabs - Show only for non-admin */}
                    {activeTab !== 'admin' ? (
                        <div className="flex p-1 bg-gray-100/50 rounded-xl mb-6">
                            <button
                                onClick={() => {
                                    setActiveTab('landowner');
                                    setUsername('');
                                    setPassword('');
                                    setError('');
                                }}
                                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'landowner'
                                    ? 'bg-white text-forest-green shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <User className="w-4 h-4" /> Landowner
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('landleaser');
                                    setUsername('');
                                    setPassword('');
                                    setError('');
                                }}
                                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'landleaser'
                                    ? 'bg-white text-forest-green shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <Warehouse className="w-4 h-4" /> Land Leaser
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2 p-3 bg-forest-green/10 rounded-xl mb-6 border border-forest-green/20">
                            <Shield className="w-5 h-5 text-forest-green" />
                            <span className="text-forest-green font-semibold">Admin Access</span>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: activeTab === 'landowner' ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={activeTab}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder={activeTab === 'admin' ? 'Admin Username' : 'e.g. Samin'}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                        required
                                    />
                                </div>
                            </div>
                        </motion.div>

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
                            {activeTab === 'admin' ? 'Login to Admin Panel' : 'Login to Dashboard'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center space-y-3">
                        {activeTab !== 'admin' && (
                            <p className="text-sm text-gray-500">
                                Don't have an account?{' '}
                                <Link to="/register" className="text-forest-green font-semibold hover:underline">
                                    Create Account
                                </Link>
                            </p>
                        )}
                        
                        {activeTab !== 'admin' ? (
                            <p className="text-sm text-gray-500">
                                For admin access,{' '}
                                <button 
                                    onClick={() => {
                                        setActiveTab('admin');
                                        setUsername('');
                                        setPassword('');
                                        setError('');
                                    }}
                                    className="text-forest-green font-semibold hover:underline"
                                >
                                    login here
                                </button>
                            </p>
                        ) : (
                            <p className="text-sm text-gray-500">
                                <button 
                                    onClick={() => {
                                        setActiveTab('landowner');
                                        setUsername('');
                                        setPassword('');
                                        setError('');
                                    }}
                                    className="text-forest-green font-semibold hover:underline"
                                >
                                    ← Back to user login
                                </button>
                            </p>
                        )}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default Login;
