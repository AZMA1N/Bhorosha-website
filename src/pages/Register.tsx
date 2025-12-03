import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Phone, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (response.ok) {
                alert('Registration successful! Please login.');
                navigate('/login');
            } else {
                alert(data.error || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed');
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
                        <h1 className="text-3xl font-bold text-forest-green mb-2">Create Account</h1>
                        <p className="text-gray-600">Join Bhorosha today</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="johndoe"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all bg-white/50"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+880 1XXX XXXXXX"
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
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
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
                            Register <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="text-forest-green font-semibold hover:underline">
                                Login here
                            </Link>
                        </p>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default Register;
