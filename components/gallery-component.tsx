import { useState } from "react";


interface imageType {
    imageUrl: string[];
    caption: string;
    date: string;
    category: string;
    title?: string;
}



export function ImagesGalleryComponent({ imageUrl,  caption, date, category, title }: imageType) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [loadingImages, setLoadingImages] = useState(new Set());

    const handleImageLoad = (imageId: number) => {
        setLoadingImages(prev => {
            const newSet = new Set(prev);
            newSet.delete(imageId);
            return newSet;
        });
    };

    const handleImageLoadStart = (imageId: number) => {
        setLoadingImages(prev => new Set(prev).add(imageId));
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-600">Latest Updates</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Recent Moments
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Capturing the daily impact and joy of our programs supporting Nigerian boys across communities
                    </p>
                </div>

                {/* Simple Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {imageUrl.slice(0, 6).map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl cursor-pointer bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                            onClick={() => setSelectedImage(index)}
                        >
                            <div className="aspect-[4/3] relative">
                                {loadingImages.has(index) && (
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                        <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                )}

                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onLoadStart={() => handleImageLoadStart(index)}
                                    onLoad={() => handleImageLoad(index)}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium leading-tight">{caption}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-300">
                                            <span className="bg-white/20 px-2 py-1 rounded">
                                                {category}
                                            </span>
                                            <span>{date}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Category badge (always visible) */}
                                <div className="absolute top-3 left-3">
                                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium text-gray-800 rounded">
                                        {category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}