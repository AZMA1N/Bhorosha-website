import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { MapPin, Ruler, FileText, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
    { id: 1, title: "Location", icon: <MapPin className="w-5 h-5" /> },
    { id: 2, title: "Land Size", icon: <Ruler className="w-5 h-5" /> },
    { id: 3, title: "Ownership", icon: <FileText className="w-5 h-5" /> },
    { id: 4, title: "Review", icon: <CheckCircle className="w-5 h-5" /> },
];

const ListLandWizard = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        district: '',
        thana: '',
        mouza: '',
        size: '',
        unit: 'decimal',
        ownershipType: 'single',
        dagNo: '',
        khatianNo: ''
    });

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Submit
            navigate('/dashboard');
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-off-white flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <GlassCard className="w-full max-w-2xl relative z-10" float>
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10" />
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-forest-green -z-10 transition-all duration-500"
                            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        />

                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex flex-col items-center gap-2 bg-off-white px-2 transition-colors ${step.id <= currentStep ? 'text-forest-green' : 'text-gray-400'
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step.id <= currentStep
                                        ? 'bg-forest-green text-white border-forest-green'
                                        : 'bg-white border-gray-300'
                                    }`}>
                                    {step.icon}
                                </div>
                                <span className="text-xs font-medium">{step.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8 min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-forest-green">Where is your land located?</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                                        <input
                                            type="text"
                                            name="district"
                                            value={formData.district}
                                            onChange={handleChange}
                                            placeholder="e.g. Dhaka"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Thana/Upazila</label>
                                        <input
                                            type="text"
                                            name="thana"
                                            value={formData.thana}
                                            onChange={handleChange}
                                            placeholder="e.g. Savar"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mouza/Area</label>
                                        <input
                                            type="text"
                                            name="mouza"
                                            value={formData.mouza}
                                            onChange={handleChange}
                                            placeholder="e.g. Amin Bazar"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-forest-green">How large is the land?</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Land Size</label>
                                        <input
                                            type="number"
                                            name="size"
                                            value={formData.size}
                                            onChange={handleChange}
                                            placeholder="e.g. 50"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                                        <select
                                            name="unit"
                                            value={formData.unit}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none bg-white"
                                        >
                                            <option value="decimal">Decimal</option>
                                            <option value="katha">Katha</option>
                                            <option value="bigha">Bigha</option>
                                            <option value="acre">Acre</option>
                                        </select>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-forest-green">Ownership Details</h2>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Ownership Type</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setFormData({ ...formData, ownershipType: 'single' })}
                                            className={`p-4 rounded-xl border-2 transition-all text-left ${formData.ownershipType === 'single'
                                                    ? 'border-forest-green bg-forest-green/5'
                                                    : 'border-gray-200 hover:border-forest-green/50'
                                                }`}
                                        >
                                            <span className="block font-bold text-forest-green mb-1">Single Owner</span>
                                            <span className="text-xs text-gray-500">Sole proprietorship of the land</span>
                                        </button>
                                        <button
                                            onClick={() => setFormData({ ...formData, ownershipType: 'joint' })}
                                            className={`p-4 rounded-xl border-2 transition-all text-left ${formData.ownershipType === 'joint'
                                                    ? 'border-forest-green bg-forest-green/5'
                                                    : 'border-gray-200 hover:border-forest-green/50'
                                                }`}
                                        >
                                            <span className="block font-bold text-forest-green mb-1">Joint Ownership</span>
                                            <span className="text-xs text-gray-500">Multiple owners / Inheritance</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Dag No.</label>
                                        <input
                                            type="text"
                                            name="dagNo"
                                            value={formData.dagNo}
                                            onChange={handleChange}
                                            placeholder="e.g. 1234"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Khatian No.</label>
                                        <input
                                            type="text"
                                            name="khatianNo"
                                            value={formData.khatianNo}
                                            onChange={handleChange}
                                            placeholder="e.g. 5678"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-forest-green">Review Details</h2>
                                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500">Location</span>
                                        <span className="font-medium">{formData.mouza}, {formData.thana}, {formData.district}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500">Size</span>
                                        <span className="font-medium">{formData.size} {formData.unit}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500">Ownership</span>
                                        <span className="font-medium capitalize">{formData.ownershipType} Owner</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Documents</span>
                                        <span className="font-medium">Dag: {formData.dagNo}, Khatian: {formData.khatianNo}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-blue-50 text-blue-800 rounded-xl text-sm">
                                    <CheckCircle className="w-5 h-5 shrink-0" />
                                    <p>By submitting, you agree to allow Bhorosha's legal team to verify these land details. This process typically takes 3-5 business days.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex justify-between pt-6 border-t border-gray-100">
                    <Button
                        variant="ghost"
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={currentStep === 1 ? 'invisible' : ''}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    <Button onClick={handleNext}>
                        {currentStep === steps.length ? 'Submit Listing' : 'Next Step'}
                        {currentStep !== steps.length && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                </div>
            </GlassCard>
        </div>
    );
};

export default ListLandWizard;
