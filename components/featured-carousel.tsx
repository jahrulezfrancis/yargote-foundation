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
    title: "From Bags to Brighter Futures: Yargote Foundation’s Boy Child Initiative",
    description: "Join us for an inspiring evening of dinner, entertainment, and fundraising to support the Yargote Foundation’s mission to empower young boys. Our 'Empower the Boy-Child Project' provides essential resources like school bags, fostering confidence and opportunity for a brighter future.",
    image: "https://i.ibb.co/zV0Vb2nm/children-with-bags.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2024-04-15",
    attendees: 57,
  },
  {
    id: "2",
    title: "Reaching Out, Raising Up: A Foundation’s Work with Boys",
    description: "Join our outreach program dedicated to uplifting young boys through mentorship, education, and life skills training. The Yargote Foundation equips boys with tools like school bags and knowledge to build resilience and achieve their potential.",
    image: "https://i.ibb.co/JwjHTBsc/boy-child-in-class.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    date: "2024-04-22",
    attendees: 43,
  }
]
const mockBlogPosts = [
  {
    id: "1",
    title: "Celebrating The International Day of The Boy Child",
    excerpt: "On International Day of the Boy Child, we spotlight the Yargote Foundation’s efforts to empower boys with resources like school bags and mentorship, helping them overcome challenges and pursue their dreams with confidence.",
    image: "https://i.ibb.co/sJbLjgpR/Whats-App-Image-2025-09-24-at-11-45-53-PM.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    date: "2024-03-15",
    author: "Victor",
  },
  {
    id: "2",
    title: "Building Stronger Communities Together",
    excerpt: "Learn how the Yargote Foundation’s partnerships are transforming communities by supporting boys with educational resources, including school bags, and fostering environments where young boys can thrive.",
    image: "https://i.ibb.co/5ggrTg0y/house-keeping.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    date: "2024-03-10",
    author: "Victor",
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
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'exit' | 'enter'>('idle')

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      goToNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, currentIndex])

  const performTransition = (newIndex: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)

    // Start exit animation
    setAnimationPhase('exit')

    setTimeout(() => {
      // Change content and start enter animation
      setCurrentIndex(newIndex)
      setAnimationPhase('enter')
    }, 300) // Exit animation duration

    setTimeout(() => {
      // Complete transition
      setAnimationPhase('idle')
      setIsTransitioning(false)
    }, 800) // Total transition duration
  }

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + featuredItems.length) % featuredItems.length
    performTransition(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % featuredItems.length
    performTransition(newIndex)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsAutoPlaying(false)
    performTransition(index)
  }

  const currentItem = featuredItems[currentIndex]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  // Animation classes based on current phase
  const getAnimationClasses = (baseDelay: number = 0) => {
    const delays = {
      exit: `delay-[${baseDelay}ms]`,
      enter: `delay-[${baseDelay + 300}ms]`,
      idle: `delay-[${baseDelay}ms]`
    }

    switch (animationPhase) {
      case 'exit':
        return `opacity-0 translate-y-4 scale-95 ${delays.exit}`
      case 'enter':
        return `opacity-100 translate-y-0 scale-100 ${delays.enter}`
      case 'idle':
      default:
        return `opacity-100 translate-y-0 scale-100 ${delays.idle}`
    }
  }

  const getContentAnimationClasses = (element: 'meta' | 'title' | 'description' | 'cta' | 'stats') => {
    const delays = {
      meta: 0,
      title: 50,
      description: 100,
      cta: 150,
      stats: 200
    }

    switch (animationPhase) {
      case 'exit':
        return `opacity-0 translate-x-8 blur-sm transition-all duration-300 ease-in-out delay-[${delays[element]}ms]`
      case 'enter':
        return `opacity-100 translate-x-0 blur-none transition-all duration-500 ease-out delay-[${delays[element] + 300}ms]`
      case 'idle':
      default:
        return `opacity-100 translate-x-0 blur-none transition-all duration-300 ease-out`
    }
  }

  const getImageAnimationClasses = () => {
    switch (animationPhase) {
      case 'exit':
        return 'scale-110 blur-sm opacity-80 transition-all duration-300 ease-in-out'
      case 'enter':
        return 'scale-105 blur-none opacity-100 transition-all duration-700 ease-out delay-200'
      case 'idle':
      default:
        return `scale-100 blur-none opacity-100 transition-all duration-500 ease-out ${isHovered ? 'scale-105' : ''}`
    }
  }

  return (
    <div className="relative group">
      {/* Main Carousel Card */}
      <div
        className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mobile Layout - Stacked */}
        <div className="block lg:hidden">
          {/* Mobile Image Section */}
          <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
            <img
              src={currentItem.image || "/placeholder.svg"}
              alt={currentItem.title}
              className={`w-full h-full object-cover ${getImageAnimationClasses()}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Mobile Badge */}
            <div className={`absolute top-4 left-4 transition-all duration-300 ${getAnimationClasses(0)}`}>
              <Badge className={`${currentItem.type === "event"
                ? "bg-gray-900 text-white border-blue-400/50"
                : "bg-gray-500/90 text-white border-purple-400/50"
                } backdrop-blur-sm px-3 py-1.5 text-xs font-medium`}>
                {currentItem.type === "event" ? "🎉 Event" : "📖 Story"}
              </Badge>
            </div>

            {/* Mobile Navigation - Positioned for touch */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 shadow-xl transition-all duration-300 w-10 h-10"
              onClick={goToPrevious}
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 shadow-xl transition-all duration-300 w-10 h-10"
              onClick={goToNext}
              disabled={isTransitioning}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Mobile Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 shadow-lg transition-all duration-300 w-8 h-8"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </Button>

              {/* Mobile Progress */}
              <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gray-400 to-gray-800 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / featuredItems.length) * 100}%`,
                    transform: animationPhase === 'exit' ? 'scaleX(0)' : 'scaleX(1)',
                    transformOrigin: 'left'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile Content Section */}
          <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
            {/* Mobile Meta */}
            <div className={`flex flex-wrap items-center gap-2 ${getContentAnimationClasses('meta')}`}>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                <Calendar className="w-3 h-3" />
                <span className="text-xs font-medium">{formatDate(currentItem.date)}</span>
              </div>

              {currentItem.type === "event" && currentItem.attendees && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                  <Users className="w-3 h-3" />
                  <span className="text-xs font-medium">{currentItem.attendees}</span>
                </div>
              )}

              {currentItem.type === "story" && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full border border-purple-100">
                  <Heart className="w-3 h-3" />
                  <span className="text-xs font-medium">{currentItem.author}</span>
                </div>
              )}
            </div>

            {/* Mobile Title */}
            <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 leading-tight ${getContentAnimationClasses('title')}`}>
              {currentItem.title}
            </h3>

            {/* Mobile Description */}
            <p className={`text-gray-600 text-sm sm:text-base leading-relaxed ${getContentAnimationClasses('description')}`}>
              {currentItem.description}
            </p>

            {/* Mobile CTA */}
            <div className={getContentAnimationClasses('cta')}>
              <Button
                asChild
                className="group/btn bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-700 hover:to-gray-950 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link href={currentItem.href}>
                  <span>{currentItem.type === "event" ? "Join Event" : "Read Full Story"}</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Mobile Event Stats */}
            {currentItem.type === "event" && (
              <div className={`grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 ${getContentAnimationClasses('stats')}`}>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">Free</div>
                  <div className="text-xs text-gray-500">Registration</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">6:00 PM</div>
                  <div className="text-xs text-gray-500">Start Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">4h</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:block">
          {/* Background with Parallax Effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={currentItem.image || "/placeholder.svg"}
              alt={currentItem.title}
              className={`w-full h-full object-cover ${getImageAnimationClasses()}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Desktop Content */}
          <div className="relative z-10 grid lg:grid-cols-2 min-h-[500px]">
            {/* Left Side - Visual Content */}
            <div className="relative flex items-center justify-center lg:justify-start p-8">
              {/* Desktop Badge */}
              <div className={`absolute top-6 left-6 ${getAnimationClasses(0)}`}>
                <Badge className={`${currentItem.type === "event"
                  ? "bg-gray-900 text-white border-blue-400/50"
                  : "bg-gray-500/90 text-white border-purple-400/50"
                  } backdrop-blur-sm px-4 py-2 text-sm font-medium`}>
                  {currentItem.type === "event" ? "🎉 Event" : "📖 Story"}
                </Badge>
              </div>

              {/* Desktop Navigation Controls */}
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

              {/* Desktop Auto-play Control */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 shadow-lg hover:scale-110 transition-all duration-300"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>

              {/* Desktop Progress Indicator */}
              <div className="absolute bottom-4 left-16 right-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gray-400 to-gray-800 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / featuredItems.length) * 100}%`,
                    transform: animationPhase === 'exit' ? 'scaleX(0)' : 'scaleX(1)',
                    transformOrigin: 'left'
                  }}
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl p-8 lg:p-12 flex flex-col justify-center space-y-6 border-l border-white/20">
              {/* Desktop Meta Information */}
              <div className={`flex flex-wrap items-center gap-3 ${getContentAnimationClasses('meta')}`}>
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

              {/* Desktop Title */}
              <h3 className={`text-3xl lg:text-4xl font-bold text-gray-900 leading-tight ${getContentAnimationClasses('title')}`}>
                {currentItem.title}
              </h3>

              {/* Desktop Description */}
              <p className={`text-gray-600 text-lg leading-relaxed ${getContentAnimationClasses('description')}`}>
                {currentItem.description}
              </p>

              {/* Desktop CTA Button */}
              <div className={getContentAnimationClasses('cta')}>
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

              {/* Desktop Additional Stats for Events */}
              {currentItem.type === "event" && (
                <div className={`flex items-center gap-6 pt-4 border-t border-gray-100 ${getContentAnimationClasses('stats')}`}>
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
      </div>

      {/* Enhanced Dot Navigation - Responsive */}
      <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
        {featuredItems.map((item, index) => (
          <button
            key={index}
            className={`group relative transition-all duration-300 hover:scale-125 ${index === currentIndex
              ? "w-8 md:w-12 h-2 md:h-3"
              : "w-2 md:w-3 h-2 md:h-3"
              }`}
            onClick={() => goToSlide(index)}
          >
            <div className={`w-full h-full rounded-full transition-all duration-300 ${index === currentIndex
              ? "bg-gradient-to-r from-primary to-gray-600 shadow-lg"
              : "bg-gray-300 group-hover:bg-gray-400"
              }`} />

            {/* Preview tooltip on hover - Hidden on mobile */}
            <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/80 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap backdrop-blur-sm">
                {item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Background Decoration */}
      <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 -right-2 md:-right-4 -bottom-2 md:-bottom-4 bg-gradient-to-r from-gray-500/5 to-gray-700/5 rounded-2xl md:rounded-3xl -z-10" />
    </div>
  )
}