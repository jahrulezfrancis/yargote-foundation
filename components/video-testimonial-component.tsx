"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Play, Quote, Sparkles } from "lucide-react"
import { useState } from "react"

interface VideoTestimonialProps {
  videoUrl: string
  thumbnailUrl?: string
  name: string
  age?: number
  location?: string
  testimonial: string
  program?: string
}

export default function VideoTestimonialCard({
  videoUrl,
  thumbnailUrl,
  name,
  age,
  location,
  testimonial,
  program
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="group overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 hover:shadow-emerald-200/50 transition-all duration-500 hover:scale-[1.02]">
      <div className="grid md:grid-cols-2 gap-0 relative">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-primary-yellow to-emerald-600"></div>
        
        {/* Video Section */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          <div className="aspect-video md:aspect-auto md:h-full relative">
            {!isPlaying ? (
              <>
                {/* Thumbnail with Play Button */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={thumbnailUrl || "/placeholder.svg"}
                    alt={`${name}'s testimonial`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative bg-primary-yellow hover:bg-yellow-400 text-emerald-700 rounded-full p-5 md:p-6 transition-all duration-300 hover:scale-110 shadow-2xl group-hover:shadow-yellow-400/50"
                    aria-label="Play video"
                  >
                    <div className="absolute inset-0 rounded-full bg-primary-yellow animate-ping opacity-20"></div>
                    <Play className="w-7 h-7 md:w-9 md:h-9 fill-current relative z-10" />
                  </button>
                </div>
                
                {/* Program Badge */}
                {program && (
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-emerald-600/95 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg flex items-center gap-2">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                    {program}
                  </div>
                )}
                
                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary-yellow/20 to-transparent blur-2xl"></div>
              </>
            ) : (
              // Video Player Container
              <div className="absolute inset-0 w-full h-full bg-black">
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onEnded={() => setIsPlaying(false)}
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50 relative">
          {/* Decorative background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-full blur-3xl -z-0"></div>
          
          <div className="space-y-4 md:space-y-6 relative z-10">
            {/* Quote Icon with gradient background */}
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200/50 rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <Quote className="w-6 h-6 md:w-7 md:h-7 text-white -rotate-3" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-yellow rounded-full"></div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium relative">
              <span className="text-emerald-600 text-4xl md:text-5xl font-serif absolute -left-2 -top-2 opacity-30">"</span>
              <span className="relative z-10">{testimonial}</span>
              <span className="text-emerald-600 text-4xl md:text-5xl font-serif absolute -bottom-6 right-0 opacity-30">"</span>
            </blockquote>

            {/* Beneficiary Info */}
            <div className="pt-6 mt-2">
              <div className="flex items-start gap-4">
                {/* Avatar placeholder with gradient */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg flex-shrink-0">
                  {name.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 leading-tight">
                    {name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-muted-foreground">
                    {age && (
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        Age {age}
                      </span>
                    )}
                    {location && (
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="pt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-emerald-600 to-primary-yellow rounded-full"></div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}