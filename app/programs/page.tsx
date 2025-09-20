"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Building, CheckCircle, Clock, ArrowRight, BookOpen, Heart, Shield, MessageCircle, DollarSign, TreePine, Megaphone, Star, Target } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { programs } from "@/lib/mock-data"

const programComponents = [
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure spaces for expression and growth",
  },
  {
    icon: MessageCircle,
    title: "Counseling Support",
    description: "Professional guidance and emotional support",
  },
  {
    icon: DollarSign,
    title: "Financial Literacy",
    description: "Essential money management skills",
  },
  {
    icon: TreePine,
    title: "Outdoor Activities",
    description: "Experiential learning through nature",
  },
  {
    icon: Megaphone,
    title: "Community Advocacy",
    description: "Raising awareness and driving change",
  },
]

const AnimatedCard = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } ${className}`}
    >
      {children}
    </div>
  )
}

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | undefined
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}+</span>
}

export default function ProgramsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  
  const featuredRef = useRef(null)
  const overviewRef = useRef(null)
  const allProgramsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const sections = [featuredRef.current, overviewRef.current, allProgramsRef.current, ctaRef.current]
    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const isSectionVisible = (sectionId: string) => visibleSections.has(sectionId)

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 overflow-hidden">
          {/* Animated background elements */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50/40 to-transparent rounded-full transition-all duration-[2000ms] ease-out ${isVisible ? '-translate-y-1/3 translate-x-1/3' : 'translate-y-full translate-x-full'
            }`} />
          <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-50/30 to-transparent rounded-full transition-all duration-[2000ms] ease-out delay-300 ${isVisible ? 'translate-y-1/3 -translate-x-1/3' : 'translate-y-full -translate-x-full'
            }`} />

          {/* Floating accent elements */}
          <div className={`absolute top-1/4 right-1/4 w-2 h-2 bg-purple-200 rounded-full animate-pulse transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} />
          <div className={`absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-green-200 rounded-full animate-pulse transition-all duration-1000 ease-out delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} />

          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Main content with staggered animations */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Category badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">Youth Development</span>
                  </div>

                  {/* Title with split animation */}
                  <div className="space-y-2">
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}>
                      Empowering Boys Through
                    </h1>
                    <span className={`block text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 leading-tight tracking-tight transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}>
                      Comprehensive Support
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-700 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    Five specialized programs designed to address the unique challenges facing boys in our communities,
                    providing holistic support that creates lasting positive change.
                  </p>

                  {/* Action buttons */}
                  <div className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 ease-out delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform active:scale-95">
                      Explore Programs
                    </button>
                    <button className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-white hover:shadow-md transform hover:scale-105 active:scale-95">
                      Download Guide
                    </button>
                  </div>
                </div>

                {/* Enhanced Stats card */}
                <div className="lg:col-span-1">
                  <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg transition-all duration-700 ease-out delay-500 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Program Impact</h3>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Boys Impacted</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">500+</div>
                      </div>

                      <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Active Mentors</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">200+</div>
                      </div>

                      <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Communities</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">50+</div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500 mb-2">Program Success Rate</div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-[1500ms] ease-out delay-1000 ${isVisible ? 'w-[92%]' : 'w-0'
                              }`}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">92%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Program - Mentorship Circles */}
        <section ref={featuredRef} id="featured-section" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <Badge variant="default" className="bg-gray-900 text-white mb-4 hover:bg-gray-800 transition-colors duration-300">
                <Target className="w-4 h-4 mr-2" />
                Flagship Program
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Mentorship Circles</h2>
              <div className={`w-24 h-1 bg-gray-900 mx-auto transition-all duration-1000 ease-out delay-300 ${isSectionVisible('featured-section') ? 'w-24' : 'w-0'
                }`}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className={`space-y-8 transition-all duration-1000 ease-out ${isSectionVisible('featured-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 transition-colors duration-300">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    Ongoing Program
                  </div>
                </div>

                <p className="text-xl text-gray-600 text-pretty leading-relaxed">
                  Our cornerstone program pairing boys with positive male role models who provide guidance in academics,
                  career choices, and personal development, creating lasting impact through meaningful relationships.
                </p>

                {/* Enhanced Stats with staggered animation */}
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { end: 800, label: 'Boys Mentored', width: 'w-4/5' },
                    { end: 100, label: 'Male Mentors', width: 'w-3/5' }
                  ].map((stat, index) => (
                    <div key={index} className={`group transition-all duration-700 ease-out ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`} style={{ transitionDelay: `${index * 200 + 400}ms` }}>
                      <div className="text-3xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">
                        <CountUp end={stat.end} />
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                      <div className="w-full bg-gray-100 h-2 rounded-full mt-2">
                        <div className={`bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out ${isSectionVisible('featured-section') ? stat.width : 'w-0'
                          }`} style={{ transitionDelay: `${index * 200 + 800}ms` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className={`bg-gray-900 hover:bg-gray-800 text-white group transition-all duration-700 hover:shadow-lg hover:scale-105 transform ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: '800ms' }}>
                  <span>Become a Mentor</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className={`relative group transition-all duration-1000 ease-out ${isSectionVisible('featured-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-900/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="https://i.ibb.co/4RV4hNsc/hero-children.png"
                  alt="Mentorship Circles"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 animate-pulse"></div>
              </div>
            </div>

            {/* Program Components with staggered animation */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ease-out ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '600ms' }}>
              {programs[0].components?.map((component, index) => (
                <Card
                  key={index}
                  className={`text-center p-8 border-gray-100 hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${index * 150 + 800}ms` }}
                >
                  <CardContent className="space-y-6">
                    <div className="w-16 h-16 bg-gray-50 group-hover:bg-gray-900 rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:rotate-12 transform">
                      <component.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800">{component.title}</h3>
                    <p className="text-gray-600 text-sm text-pretty leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Outcomes with enhanced animation */}
            <Card className={`p-10 border-gray-100 shadow-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-1000 ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`} style={{ transitionDelay: '1000ms' }}>
              <CardContent className="space-y-8">
                <h3 className="text-3xl font-bold text-center text-gray-900">Program Impact</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {programs[0].outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 group hover:bg-white p-4 rounded-xl transition-all duration-500 hover:-translate-y-1 transform ${isSectionVisible('featured-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                      style={{ transitionDelay: `${index * 100 + 1200}ms` }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Program Overview */}
        <section ref={overviewRef} id="overview-section" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center space-y-6 mb-20 transition-all duration-1000 ease-out ${isSectionVisible('overview-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Five Core Programs</h2>
              <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto leading-relaxed">
                Comprehensive support addressing every aspect of a boy's development and growth
              </p>
              <div className={`w-24 h-1 bg-gray-900 mx-auto transition-all duration-1000 ease-out delay-300 ${isSectionVisible('overview-section') ? 'w-24' : 'w-0'
                }`}></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
              {programComponents.map((component, index) => (
                <Card key={index} className={`text-center p-8 border-gray-200 bg-white hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group hover:bg-gradient-to-br hover:from-white hover:to-blue-50 ${isSectionVisible('overview-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`} 
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}>
                  <CardContent className="space-y-6">
                    <div className="w-16 h-16 bg-gray-50 group-hover:bg-gray-900 rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:rotate-12 transform">
                      <component.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{component.title}</h3>
                    <p className="text-gray-600 text-sm text-pretty leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Programs Grid */}
        <section ref={allProgramsRef} id="all-programs-section" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center space-y-6 mb-20 transition-all duration-1000 ease-out ${isSectionVisible('all-programs-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">All Programs</h2>
              <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
                Specialized initiatives working together to empower the boy child
              </p>
              <div className={`w-24 h-1 bg-gray-900 mx-auto transition-all duration-1000 ease-out delay-300 ${isSectionVisible('all-programs-section') ? 'w-24' : 'w-0'
                }`}></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {programs.slice(1).map((program, index) => (
                <Card key={index} className={`overflow-hidden border-gray-100 hover:shadow-2xl transition-all duration-1000 hover:-translate-y-3 group bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 ${isSectionVisible('all-programs-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating badge on image */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {program.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{program.title}</h3>
                      <p className="text-gray-600 text-pretty leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">{program.description}</p>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                          <Users className="w-5 h-5 text-gray-900" />
                          <span className="text-gray-600 font-medium">{program.participants} participants</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-bold text-gray-900">Key Outcomes:</h4>
                        <div className="space-y-2">
                          {program.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="flex items-start gap-3 text-sm group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${outcomeIndex * 100}ms` }}>
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group-hover:scale-105 transform"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section ref={ctaRef} id="cta-section" className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
          
          {/* Animated background elements */}
          <div className={`absolute top-0 left-0 w-full h-full opacity-10 transition-opacity duration-1000 ${isSectionVisible('cta-section') ? 'opacity-10' : 'opacity-0'
            }`}>
            <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-full animate-ping opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
            <div className={`transition-all duration-1000 ease-out ${isSectionVisible('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-6">Ready to Make a Difference?</h2>
            </div>

            <div className={`transition-all duration-1000 ease-out ${isSectionVisible('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '200ms' }}>
              <p className="text-xl text-gray-300 text-pretty max-w-3xl mx-auto leading-relaxed">
                Join us in empowering the next generation of leaders. Every contribution, big or small, creates lasting
                impact in a young person's life.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-6 justify-center pt-8 transition-all duration-1000 ease-out ${isSectionVisible('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '400ms' }}>
              <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 group transition-all duration-300 hover:shadow-xl hover:scale-105 transform active:scale-95">
                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:text-red-500 transition-all duration-300" />
                Support Our Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent group transition-all duration-300 hover:scale-105 transform active:scale-95"
              >
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Volunteer With Us
              </Button>
            </div>

            {/* Additional animated elements */}
            <div className={`flex justify-center gap-8 pt-12 transition-all duration-1000 ease-out ${isSectionVisible('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '600ms' }}>
              {[
                { icon: Heart, label: 'Impact Lives' },
                { icon: Users, label: 'Build Community' },
                { icon: Target, label: 'Create Change' }
              ].map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}