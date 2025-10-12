"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Heart, Download, Share2 } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { GalleryImage } from "@/lib/types";



type SimpleLightboxProps = {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
};

const SimpleLightbox = ({ images, currentIndex, onClose }: SimpleLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);
  const [liked, setLiked] = useState(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleLike = () => {
    setLiked(prev => {
      const newSet = new Set(prev);
      if (newSet.has(images[index].id)) {
        newSet.delete(images[index].id);
      } else {
        newSet.add(images[index].id);
      }
      return newSet;
    });
  };

  if (!mounted) return null;

  const lightboxContent = (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex flex-col">
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all z-50 sm:w-14 sm:h-14"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all z-50 sm:w-14 sm:h-14"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Image */}
        <div className="max-w-[90vw] sm:max-w-4xl max-h-[50vh] sm:max-h-[80vh] relative">
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Image info */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-6">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 text-white max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{images[index].caption}</h3>
                <div className="flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm text-gray-300">
                  <span className="bg-white/20 px-2 py-1 rounded text-xs">
                    {images[index].category}
                  </span>
                  <span>{images[index].date}</span>
                  <span>{index + 1} / {images.length}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={toggleLike}
                  className={`p-2 rounded-full transition-all ${
                    liked.has(images[index].id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked.has(images[index].id) ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(lightboxContent, document.body);
};

export function RecentImagesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadingImages, setLoadingImages] = useState(new Set());

  const { galleryImages: recentImages } = useAppStore();

  const handleImageLoad = (imageId: string) => {
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageId);
      return newSet;
    });
  };

  const handleImageLoadStart = (imageId: string) => {
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
          {recentImages.slice(0,6).map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] relative">
                {loadingImages.has(image.id) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoadStart={() => handleImageLoadStart(image.id)}
                  onLoad={() => handleImageLoad(image.id)}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-2">
                    <p className="text-sm font-medium leading-tight">{image.caption}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="bg-white/20 px-2 py-1 rounded">
                        {image.category}
                      </span>
                      <span>{image.date}</span>
                    </div>
                  </div>
                </div>

                {/* Category badge (always visible) */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium text-gray-800 rounded">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple stats */}
        <div className="flex items-center justify-center gap-8 mt-12 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">{recentImages.length}</div>
            <div className="text-sm text-gray-600">Recent Photos</div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-sm text-gray-600">Program Areas</div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-600">Boys Reached</div>
          </div>
        </div>
      </div>

      {/* Simple Lightbox */}
      {selectedImage !== null && (
        <SimpleLightbox
          images={recentImages}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}