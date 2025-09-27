"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Heart, ChevronLeft, ChevronRight, Trophy, BookOpen, Zap } from "lucide-react"
import Link from "next/link"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeInSection } from "@/components/fade-in-section"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    title: "Empowering Boys to",
    highlight: "Transform Communities",
    description: "Through mentorship, education, and advocacy, we shape boys into disciplined, responsible, and visionary young men who rise above challenges and lead positive change.",
    image: "https://i.ibb.co/4RV4hNsc/hero-children.png",
    alt: "Boys participating in mentorship program",
    floatingIcon1: Users,
    floatingIcon2: Target,
    primaryCta: { text: "Support Our Mission", href: "/donate", icon: Heart },
    secondaryCta: { text: "Learn More", href: "/programs", icon: ArrowRight }
  },
  {
    title: "Building Tomorrow's",
    highlight: "Leaders Today",
    description: "Our comprehensive programs focus on character development, academic excellence, and leadership skills that prepare young men for success in all areas of life.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=600&fit=crop",
    alt: "Young leaders in training session",
    floatingIcon1: Trophy,
    floatingIcon2: BookOpen,
    primaryCta: { text: "Join Our Programs", href: "/programs", icon: ArrowRight },
    secondaryCta: { text: "Meet Our Team", href: "/team", icon: Users }
  },
  {
    title: "Creating",
    highlight: "Lasting Impact",
    description: "From at-risk youth to community champions - witness the incredible transformation stories of young men who found their purpose through our mentorship programs.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=600&fit=crop",
    alt: "Success stories and testimonials",
    floatingIcon1: Zap,
    floatingIcon2: Heart,
    primaryCta: { text: "Read Success Stories", href: "/impact", icon: Trophy },
    secondaryCta: { text: "Get Involved", href: "/volunteer", icon: Users }
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isSlideChanging, setIsSlideChanging] = useState(false)

  // Initialize animations
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto-advance slides with animation state management
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlideChanging(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsSlideChanging(false)
      }, 150) // Brief pause for smooth transition
    }, 6000) // Change slide every 6 seconds (increased for better UX)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    if (!isSlideChanging) {
      setIsSlideChanging(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsSlideChanging(false)
      }, 150)
    }
  }

  const prevSlide = () => {
    if (!isSlideChanging) {
      setIsSlideChanging(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
        setIsSlideChanging(false)
      }, 150)
    }
  }

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isSlideChanging) {
      setIsSlideChanging(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsSlideChanging(false)
      }, 150)
    }
  }

  const slide = heroSlides[currentSlide]
  const FloatingIcon1 = slide.floatingIcon1
  const FloatingIcon2 = slide.floatingIcon2
  const PrimaryIcon = slide.primaryCta.icon
  const SecondaryIcon = slide.secondaryCta.icon

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 py-8 lg:py-20 overflow-hidden">
      {/* Enhanced Background decoration with emerald theme */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated background elements */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full transition-all duration-[3000ms] ease-out ${isVisible ? '-translate-y-1/4 translate-x-1/4' : 'translate-y-full translate-x-full'
        }`} />
      <div className={`absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full transition-all duration-[3000ms] ease-out delay-500 ${isVisible ? 'translate-y-1/4 -translate-x-1/4' : 'translate-y-full -translate-x-full'
        }`} />
      
      {/* Floating accent elements */}
      <div className={`absolute top-1/3 right-1/3 w-4 h-4 bg-emerald-400 rounded-full animate-pulse transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`} />
      <div className={`absolute bottom-1/4 left-1/4 w-3 h-3 bg-emerald-300 rounded-full animate-pulse delay-1000 transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`} />
      <div className={`absolute top-1/2 left-1/5 w-2 h-2 bg-emerald-500 rounded-full animate-ping transition-all duration-1000 ease-out delay-1400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Content with enhanced animations */}
          <div className="space-y-6">
            <div className="space-y-6 min-h-[200px]">
              <h1 className={`text-4xl lg:text-6xl font-bold text-balance leading-tight text-gray-900 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isSlideChanging ? 'opacity-50 translate-y-2' : ''}`}>
                {slide.title}
                <span className={`text-emerald-600 block mt-2 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${isSlideChanging ? 'opacity-50 translate-y-2' : ''}`}>
                  {slide.highlight}
                </span>
              </h1>
              
              <p className={`text-xl text-gray-600 text-pretty leading-relaxed transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${isSlideChanging ? 'opacity-50 translate-y-2' : ''}`}>
                {slide.description}
              </p>
            </div>

            {/* Enhanced Stats with emerald accents */}
            <div className={`grid grid-cols-3 gap-8 py-4 min-h-[80px] transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${isSlideChanging ? 'opacity-75' : ''}`}>
              {currentSlide === 0 ? (
                <>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter end={500} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Boys Reached</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter end={200} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Mentors</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter end={10} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Communities</div>
                  </div>
                </>
              ) : currentSlide === 1 ? (
                <>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">15+</div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Programs</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">95%</div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Success Rate</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">5</div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Years Impact</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">150+</div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Success Stories</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">80%</div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">College Bound</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">100%</div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Satisfaction</div>
                  </div>
                </>
              )}
            </div>

            {/* Enhanced CTA Buttons with emerald theme */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-2 min-h-[60px] transition-all duration-1000 ease-out delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${isSlideChanging ? 'opacity-75' : ''}`}>
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95 group"
              >
                <Link href={slide.primaryCta.href} className="flex items-center gap-2">
                  {slide.primaryCta.text}
                  <PrimaryIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 text-emerald-700 hover:text-emerald-800 transform active:scale-95 group"
              >
                <Link href={slide.secondaryCta.href} className="flex items-center gap-2">
                  {slide.secondaryCta.text}
                  <SecondaryIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Image with Navigation */}
          <div className={`relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
            <div className="relative">
              <div className={`aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 group ${isSlideChanging ? 'scale-98 opacity-90' : 'hover:scale-105'
                }`}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${isSlideChanging ? 'scale-105 opacity-80' : ''
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent group-hover:from-emerald-900/30 transition-all duration-500"></div>
              </div>
              
              {/* Enhanced floating elements with emerald theme */}
              <div className={`absolute -top-6 -right-6 bg-emerald-500 text-white p-4 rounded-full shadow-xl transition-all duration-700 hover:scale-110 hover:rotate-12 transform ${!isSlideChanging ? 'animate-bounce' : ''
                }`}>
                <FloatingIcon1 className="w-6 h-6" />
              </div>
              <div className={`absolute -bottom-6 -left-6 bg-emerald-700 text-white p-4 rounded-full shadow-xl transition-all duration-700 hover:scale-110 hover:rotate-12 transform ${!isSlideChanging ? 'animate-pulse' : ''
                }`}>
                <FloatingIcon2 className="w-6 h-6" />
              </div>

              {/* Decorative rings */}
              <div className={`absolute -top-2 -right-2 w-16 h-16 border-2 border-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${!isSlideChanging ? 'animate-ping' : ''
                }`}></div>
              <div className={`absolute -bottom-2 -left-2 w-16 h-16 border-2 border-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 ${!isSlideChanging ? 'animate-ping' : ''
                }`}></div>
            </div>

            {/* Enhanced Navigation Controls */}
            <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                disabled={isSlideChanging}
                className="rounded-full bg-white/95 backdrop-blur-sm hover:bg-emerald-50 border-emerald-200 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl group disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700 group-hover:-translate-x-0.5 transition-all duration-300" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                disabled={isSlideChanging}
                className="rounded-full bg-white/95 backdrop-blur-sm hover:bg-emerald-50 border-emerald-200 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl group disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className={`flex justify-center gap-3 mt-12 transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isSlideChanging}
              className={`h-3 rounded-full transition-all duration-300 hover:scale-110 transform ${
                index === currentSlide 
                  ? 'w-8 bg-emerald-600 shadow-lg shadow-emerald-600/30' 
                  : 'w-3 bg-emerald-200 hover:bg-emerald-300'
              } disabled:opacity-50`}
            />
          ))}
        </div>

       

        {/* Additional animated elements */}
        <div className={`absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full transition-all duration-1000 ease-out delay-1600 ${isVisible ? 'opacity-100 scale-100 animate-pulse' : 'opacity-0 scale-0'
          }`} />
        <div className={`absolute bottom-10 right-10 w-3 h-3 bg-emerald-300 rounded-full transition-all duration-1000 ease-out delay-1800 ${isVisible ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-0'
          }`} />
      </div>
    </section>
  )
}