import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface SlideImage {
    id: number;
    src: string;
    title: string;
    category: string;
    description?: string;
}

interface ImageSlideshowProps {
    images: SlideImage[];
    autoPlayInterval?: number;
}

export const ImageSlideshow = ({ images, autoPlayInterval = 4000 }: ImageSlideshowProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slideRef = useRef<HTMLDivElement>(null);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [isPaused, images.length, autoPlayInterval]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <div 
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Main Slideshow */}
            <div 
                ref={slideRef}
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={currentImage.src}
                            alt={currentImage.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block bg-forest-green/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-3 uppercase tracking-wide"
                            >
                                {currentImage.category}
                            </motion.span>
                            <motion.h3 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
                            >
                                {currentImage.title}
                            </motion.h3>
                            {currentImage.description && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-200 text-sm md:text-base max-w-xl"
                                >
                                    {currentImage.description}
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 z-10"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 z-10"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Slide counter */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => goToSlide(index)}
                        className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                            index === currentIndex 
                                ? 'ring-3 ring-forest-green scale-105 shadow-lg' 
                                : 'opacity-60 hover:opacity-100 hover:scale-105'
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                        />
                        {index === currentIndex && (
                            <div className="absolute inset-0 bg-forest-green/20" />
                        )}
                    </button>
                ))}
            </div>

            {/* Progress dots for mobile */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'bg-forest-green w-6' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
