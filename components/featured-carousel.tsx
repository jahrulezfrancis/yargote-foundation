"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, Users, Play, Pause, ArrowUpRight, Clock, Heart } from "lucide-react"
import Link from "next/link"

// Mock data matching your structure
const mockEvents = [
  {
    id: "1",
    title: "Annual Community Fundraising Gala",
    description: "Join us for an elegant evening of dinner, entertainment, and fundraising to support our programs.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2024-04-15",
    attendees: 200,
  },
  {
    id: "2",
    title: "Mentorship Training Workshop",
    description: "Comprehensive training session for new mentors covering communication skills and effective strategies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    date: "2024-04-22",
    attendees: 45,
  }
]

const mockBlogPosts = [
  {
    id: "1",
    title: "Transforming Lives Through Education: Maria's Journey",
    excerpt: "When Maria first walked through our doors, she carried the weight of uncertainty and dreams.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    date: "2024-03-15",
    author: "Sarah Johnson",
  },
  {
    id: "2",
    title: "Building Stronger Communities Together",
    excerpt: "Discover how our community partnerships are creating lasting impact across neighborhoods.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    date: "2024-03-10",
    author: "Michael Chen",
  }
]

const featuredItems = [
  ...mockEvents.slice(0, 2).map((event) => ({
    id: event.id,
    type: "event" as const,
    title: event.title,
    description: event.description,
    image: event.image,
    date: event.date,
    attendees: event.attendees,
    href: `/events/${event.id}`,
  })),
  ...mockBlogPosts.slice(0, 2).map((post) => ({
    id: post.id,
    type: "story" as const,
    title: post.title,
    description: post.excerpt,
    image: post.image,
    date: post.date,
    author: post.author,
    href: `/blog/${post.id}`,
  })),
]

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      goToNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, currentIndex])

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const currentItem = featuredItems[currentIndex]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="relative group">
      {/* Main Carousel Card */}
      <div 
        className="relative overflow-hidden rounded-3xl shadow-2xl bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentItem.image || "/placeholder.svg"}
            alt={currentItem.title}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isTransitioning ? 'scale-110 blur-sm' : 'scale-105'
            } ${isHovered ? 'scale-110' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 grid lg:grid-cols-2 min-h-[500px]">
          {/* Left Side - Visual Content */}
          <div className="relative flex items-center justify-center lg:justify-start p-8">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6">
              <Badge className={`${
                currentItem.type === "event" 
                  ? "bg-gray-900 text-white border-blue-400/50" 
                  : "bg-gray-500/90 text-white border-purple-400/50"
              } backdrop-blur-sm px-4 py-2 text-sm font-medium`}>
                {currentItem.type === "event" ? "🎉 Event" : "📖 Story"}
              </Badge>
            </div>

            {/* Navigation Controls */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 shadow-xl hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
              onClick={goToPrevious}
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 shadow-xl hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
              onClick={goToNext}
              disabled={isTransitioning}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Auto-play Control */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 shadow-lg hover:scale-110 transition-all duration-300"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>

            {/* Progress Indicator */}
            <div className="absolute bottom-4 left-16 right-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-gray-400 to-gray-800 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((currentIndex + 1) / featuredItems.length) * 100}%`,
                  transform: isTransitioning ? 'scaleX(0)' : 'scaleX(1)',
                  transformOrigin: 'left'
                }}
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl p-8 lg:p-12 flex flex-col justify-center space-y-6 border-l border-white/20">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{formatDate(currentItem.date)}</span>
              </div>
              
              {currentItem.type === "event" && currentItem.attendees && (
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-100">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentItem.attendees} attendees</span>
                </div>
              )}
              
              {currentItem.type === "story" && (
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full border border-purple-100">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">by {currentItem.author}</span>
                </div>
              )}
            </div>

            {/* Title with Animation */}
            <h3 className={`text-3xl lg:text-4xl font-bold text-gray-900 leading-tight transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {currentItem.title}
            </h3>

            {/* Description */}
            <p className={`text-gray-600 text-lg leading-relaxed transition-all duration-500 delay-100 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {currentItem.description}
            </p>

            {/* CTA Button */}
            <div className={`transition-all duration-500 delay-200 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              <Button
                asChild
                className="group/btn bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-700 hover:to-gray-950 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href={currentItem.href}>
                  <span>{currentItem.type === "event" ? "Join Event" : "Read Full Story"}</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Additional Stats for Events */}
            {currentItem.type === "event" && (
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Free</div>
                  <div className="text-sm text-gray-500">Registration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">6:00 PM</div>
                  <div className="text-sm text-gray-500">Start Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4h</div>
                  <div className="text-sm text-gray-500">Duration</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Dot Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {featuredItems.map((item, index) => (
          <button
            key={index}
            className={`group relative transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? "w-12 h-3"
                : "w-3 h-3"
            }`}
            onClick={() => goToSlide(index)}
          >
            <div className={`w-full h-full rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-primary to-gray-600 shadow-lg"
                : "bg-gray-300 group-hover:bg-gray-400"
            }`} />
            
            {/* Preview tooltip on hover */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/80 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap backdrop-blur-sm">
                {item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Background Decoration */}
      <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-r from-gray-500/5 to-gray-700/5 rounded-3xl -z-10" />
    </div>
  )
}