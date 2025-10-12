"use client";
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, X, Maximize2, Download, Heart, Share2, ZoomIn, Camera } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';


const BoyChildGallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [fullscreenIndex, setFullscreenIndex] = useState(0);
    const [loadingImages, setLoadingImages] = useState<Set<number | string>>(new Set<number | string>());
    const [likedImages, setLikedImages] = useState<Set<number | string>>(new Set<number | string>());
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const {galleryImages} = useAppStore()

    const featuredImages = galleryImages.filter(img => img.featured);
    const allImages = galleryImages;

    // Enhanced auto-advance with pause on hover
    useEffect(() => {
        const startCarousel = () => {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
            }, 5000);
        };

        startCarousel();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [featuredImages.length]);

    const pauseCarousel = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const resumeCarousel = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
        }, 5000);
    };

    // Fullscreen slideshow
    useEffect(() => {
        if (isFullscreen && isPlaying) {
            const interval = setInterval(() => {
                setFullscreenIndex((prev) => (prev + 1) % allImages.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isFullscreen, isPlaying, allImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
    };

    const openFullscreen = (index = 0) => {
        setFullscreenIndex(index);
        setIsFullscreen(true);
        setIsPlaying(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
        setIsPlaying(false);
    };

    const nextFullscreenImage = () => {
        setFullscreenIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevFullscreenImage = () => {
        setFullscreenIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const toggleLike = (imageId?: number | string) => {
        if (imageId == null) return;
        setLikedImages(prev => {
            const newSet = new Set(prev);
            if (newSet.has(imageId)) {
                newSet.delete(imageId);
            } else {
                newSet.add(imageId);
            }
            return newSet;
        });
    };

    const handleImageLoad = (imageId?: number | string) => {
        if (imageId == null) return;
        setLoadingImages(prev => {
            const newSet = new Set(prev);
            newSet.delete(imageId);
            return newSet;
        });
    };

    const handleImageLoadStart = (imageId?: number | string) => {
        if (imageId == null) return;
        setLoadingImages(prev => {
            const newSet = new Set(prev);
            newSet.add(imageId);
            return newSet;
        });
    };

    // Keyboard navigation
    useEffect(() => {
        interface KeyboardEventWithSpace extends KeyboardEvent {
            key: string;
        }

        const handleKeyPress = (e: KeyboardEventWithSpace): void => {
            if (isFullscreen) {
            switch (e.key) {
                case 'ArrowLeft':
                prevFullscreenImage();
                break;
                case 'ArrowRight':
                nextFullscreenImage();
                break;
                case 'Escape':
                closeFullscreen();
                break;
                case ' ':
                e.preventDefault();
                setIsPlaying(!isPlaying);
                break;
            }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isFullscreen, isPlaying]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Enhanced Header */}
            <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl"></div>
                </div>
                <div className="relative container mx-auto px-4 py-16">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Camera className="w-8 h-8" />
                            <span className="text-lg font-medium text-gray-300">Visual Impact</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                            Our Gallery
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                            Capturing the journey of empowering Nigerian boys through education, mentorship,
                            and life-changing opportunities for a brighter future
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm">Active Programs</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                <span className="text-sm">{galleryImages.length} Moments</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                <span className="text-sm">Across Nigeria</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Featured Carousel */}
            <div className="container mx-auto px-4 py-16">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Program Highlights</h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto">
                        Witness the transformative impact of our programs on the lives of Nigerian boys
                    </p>
                </div>

                <div
                    className="relative rounded-3xl overflow-hidden bg-white shadow-2xl max-w-6xl mx-auto group"
                    onMouseEnter={pauseCarousel}
                    onMouseLeave={resumeCarousel}
                >
                    <div className="relative h-96 lg:h-[600px]">
                        <img
                            src={featuredImages[currentSlide]?.src}
                            alt={featuredImages[currentSlide]?.alt}
                            className="w-full h-full object-cover transition-all duration-700"
                            onLoadStart={() => handleImageLoadStart(featuredImages[currentSlide]?.id)}
                            onLoad={() => handleImageLoad(featuredImages[currentSlide]?.id)}
                        />

                        {/* Enhanced overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                        {/* Loading indicator */}
                        {loadingImages.has(featuredImages[currentSlide]?.id) && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                <div className="w-8 h-8 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* Enhanced caption */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {featuredImages[currentSlide]?.caption}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                                        {featuredImages[currentSlide]?.category}
                                    </span>
                                    <span>{featuredImages[currentSlide]?.date}</span>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Progress bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
                            <div
                                className="h-full bg-gradient-to-r from-gray-600 to-gray-800 transition-all duration-300"
                                style={{ width: `${((currentSlide + 1) / featuredImages.length) * 100}%` }}
                            ></div>
                        </div>

                        {/* Enhanced Dots Indicator */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                            {featuredImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'bg-white scale-125 shadow-lg'
                                            : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Simplified Controls Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-gray-900">Impact Stories</h2>
                        <p className="text-gray-600">
                            Every photograph captures a moment of transformation and hope for Nigerian boys
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Slideshow Button */}
                        <button
                            onClick={() => openFullscreen()}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Maximize2 className="w-4 h-4" />
                            View Slideshow
                        </button>
                    </div>
                </div>

                {/* Enhanced Grid Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                            onClick={() => openFullscreen(index)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={image.thumbnail}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    onLoadStart={() => handleImageLoadStart(image.id)}
                                    onLoad={() => handleImageLoad(image.id)}
                                />

                                {/* Loading overlay */}
                                {loadingImages.has(image.id) && (
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                        <div className="w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                )}

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center justify-between">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleLike(image.id);
                                                }}
                                                className={`p-2 rounded-full backdrop-blur-sm transition-all ${likedImages.has(image.id)
                                                        ? 'bg-red-500 text-white'
                                                        : 'bg-white/20 text-white hover:bg-white/30'
                                                    }`}
                                            >
                                                <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                                            </button>
                                            <div className="flex gap-2">
                                                <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all">
                                                    <Share2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all">
                                                    <ZoomIn className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Category badge */}
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 rounded-full">
                                        {image.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {image.caption}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{image.date}</span>
                                    <div className="flex gap-1">
                                        {image.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Fullscreen Slideshow */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 bg-black">
                    <div className="relative h-full flex items-center justify-center">
                        <img
                            src={allImages[fullscreenIndex]?.src}
                            alt={allImages[fullscreenIndex]?.alt}
                            className="max-w-full max-h-full object-contain transition-opacity duration-300"
                        />

                        {/* Enhanced Controls */}
                        <div className="absolute top-6 right-6 flex gap-3">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                            >
                                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleLike(allImages[fullscreenIndex]?.id);
                                }}
                                className={`w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${likedImages.has(allImages[fullscreenIndex]?.id)
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                    }`}
                            >
                                <Heart className={`w-5 h-5 ${likedImages.has(allImages[fullscreenIndex]?.id) ? 'fill-current' : ''}`} />
                            </button>
                            <button
                                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                            >
                                <Download className="w-5 h-5" />
                            </button>
                            <button
                                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                            >
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={closeFullscreen}
                                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Enhanced Navigation */}
                        <button
                            onClick={prevFullscreenImage}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextFullscreenImage}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Enhanced Info Panel */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 text-white max-w-4xl mx-auto">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl lg:text-2xl font-bold mb-2">
                                            {allImages[fullscreenIndex]?.caption}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                                            <span className="bg-white/20 px-3 py-1 rounded-full">
                                                {allImages[fullscreenIndex]?.category}
                                            </span>
                                            <span>{allImages[fullscreenIndex]?.date}</span>
                                            <div className="flex gap-2">
                                                {allImages[fullscreenIndex]?.tags.map(tag => (
                                                    <span key={tag} className="text-gray-400">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-medium">
                                            {fullscreenIndex + 1} of {allImages.length}
                                        </p>
                                        <div className="w-48 h-1 bg-white/20 rounded-full mt-2">
                                            <div
                                                className="h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-full transition-all duration-300"
                                                style={{ width: `${((fullscreenIndex + 1) / allImages.length) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail strip */}
                        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 max-w-4xl overflow-hidden">
                            <div className="flex gap-2 px-6">
                                {allImages.slice(Math.max(0, fullscreenIndex - 2), fullscreenIndex + 3).map((img, idx) => {
                                    const actualIndex = Math.max(0, fullscreenIndex - 2) + idx;
                                    return (
                                        <button
                                            key={img.id}
                                            onClick={() => setFullscreenIndex(actualIndex)}
                                            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${actualIndex === fullscreenIndex
                                                    ? 'border-white scale-110'
                                                    : 'border-white/30 opacity-70 hover:opacity-100'
                                                }`}
                                        >
                                            <img
                                                src={img.thumbnail}
                                                alt={img.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Keyboard shortcuts info */}
                        <div className="absolute top-6 left-6">
                            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 text-white text-xs space-y-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div>← → Navigate</div>
                                <div>Space Play/Pause</div>
                                <div>Esc Exit</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Statistics Section - Boy Child NGO Focus */}
            <div className="bg-[#B2BEB5] text-gray-900 py-16 mt-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Impact on Nigerian Boys</h2>
                        <p className="text-gray-800 max-w-2xl mx-auto">
                            Every photograph represents a life transformed through education, mentorship, and empowerment
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2 text-gray-900">2,500+</div>
                            <div className="text-gray-700">Boys Empowered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2 text-gray-900">36</div>
                            <div className="text-gray-700">States Reached</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2 text-gray-900">850</div>
                            <div className="text-gray-700">Scholarships Awarded</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2 text-gray-900">95%</div>
                            <div className="text-gray-700">Success Rate</div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed">
                            From Lagos to Kano, Abuja to Port Harcourt, we are transforming the lives of Nigerian boys
                            through comprehensive programs that address education, leadership, vocational skills, and character development.
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-40"></div>
        </div>
    );
};

export default BoyChildGallery;