"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, CheckCircle, Clock, ArrowRight, BookOpen, Heart, Shield, MessageCircle, DollarSign, TreePine, Megaphone, Target, Award, TrendingUp, Lightbulb } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import CountUp from "@/utils/countUp"
import EmpowerTheBoyChildProjecComponent from "@/components/sections/empower-the-boy-child"
import { useAppStore } from "@/store/useAppStore"

const programComponents = [
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure safe spaces for expression and growth",
  },
  {
    icon: MessageCircle,
    title: "Counseling Support",
    description: "Professional guidance and emotional support",
  },
  {
    icon: DollarSign,
    title: "Soft/Hard Skills Acquisition",
    description: "Soft skills and financial literacy training",
  },
  {
    icon: TreePine,
    title: "Boys and Parent Bonding Activities",
    description: "Experiential learning through nature",
  },
  {
    icon: Megaphone,
    title: "Community Engagement & Advocacy",
    description: "Raising awareness and driving change",
  },
]

const outcomes = [
  "Improved academic performance through personalized guidance",
  "Enhanced career awareness and goal setting",
  "Strengthened personal development and confidence",
  "Positive male role model relationships established",
  "Participants grow into peer mentors, building leadership."
]


export default function ProgramsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())

  const { programs } = useAppStore()

  console.log("Programs data:", programs)

  const coreRef = useRef(null)
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

    const sections = [coreRef.current, featuredRef.current, overviewRef.current, allProgramsRef.current, ctaRef.current]
    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [programs])

  const isSectionVisible = (sectionId: string) => visibleSections.has(sectionId)



  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <main>
        {/* Enhanced Hero Section - Programs Overview */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16 md:py-20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-full animate-pulse -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-100/60 to-transparent rounded-full animate-pulse delay-1000 translate-y-1/3 -translate-x-1/3" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-50/40 to-pink-50/40 rounded-full animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-300 rounded-full animate-bounce" />
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-300 rounded-full animate-bounce delay-300" />
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-700" />

          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm animate-slideInFromLeft mb-6">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Programs & Initiatives</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-slideInFromLeft mb-4" style={{ animationDelay: '0.2s' }}>
                  Comprehensive Support Programs
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
                  Five specialized initiatives designed to address every aspect of boys' development through holistic, evidence-based approaches
                </p>
              </div>

              {/* Programs Quick Overview Cards */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                {[
                  { icon: Users, name: "Mentorship Circles", color: "emerald" },
                  { icon: BookOpen, name: "Safe Space for Boys", color: "emerald" },
                  { icon: Award, name: "Life Skills Training", color: "emerald" },
                  { icon: Heart, name: "Parent-Boy Bonding", color: "emerald" },
                  { icon: Lightbulb, name: "Community Advocacy", color: "emerald" }
                ].map((program, index) => (
                  <Card key={index} className={`group hover:shadow-lg transition-all duration-500 border-2 hover:border-${program.color}-200 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                    <CardContent className="p-4 text-center space-y-3">
                      <div className={`w-12 h-12 bg-${program.color}-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-${program.color}-100 group-hover:scale-110 transition-all duration-500`}>
                        <program.icon className={`w-6 h-6 text-[#fec527] transition-all duration-500`} />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {program.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Program Impact Stats & Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Impact Stats Card */}
                <Card className={`border-2 transition-all duration-1000 ease-out hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`} style={{ transitionDelay: '800ms' }}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-gray-900">Program Impact</h3>
                    </div>
                    <div className="space-y-6">
                      <div className="group cursor-default">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Boys Impacted</span>
                          <span className="text-2xl font-bold text-emerald-600 tabular-nums">
                            <CountUp end={500} />
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-emerald-600 rounded-full transition-all duration-[1500ms] ease-out ${isVisible ? 'w-[85%]' : 'w-0'
                            }`}></div>
                        </div>
                      </div>

                      <div className="group cursor-default">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Active Mentors</span>
                          <span className="text-2xl font-bold text-primary-yellow tabular-nums">
                            <CountUp end={200} />
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-primary-yellow rounded-full transition-all duration-[1500ms] ease-out delay-200 ${isVisible ? 'w-[70%]' : 'w-0'
                            }`}></div>
                        </div>
                      </div>

                      <div className="group cursor-default">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Communities</span>
                          <span className="text-2xl font-bold text-emerald-600 tabular-nums">
                            <CountUp end={50} />
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-emerald-600 rounded-full transition-all duration-[1500ms] ease-out delay-400 ${isVisible ? 'w-[60%]' : 'w-0'
                            }`}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Program Components Card */}
                <Card className={`border-2 bg-gradient-to-br from-emerald-50 to-white transition-all duration-1000 ease-out hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`} style={{ transitionDelay: '900ms' }}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Target className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-gray-900">Program Components</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { icon: Shield, label: "Safe Learning Spaces" },
                        { icon: MessageCircle, label: "Counseling Services" },
                        { icon: DollarSign, label: "Skill Acquisition" },
                        { icon: TreePine, label: "Outdoor Learning" },
                        { icon: Megaphone, label: "Advocacy Initiatives" }
                      ].map((item, index) => (
                        <div key={index} className={`flex items-center gap-3 group hover:bg-white hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`} style={{ transitionDelay: `${index * 100 + 1000}ms` }}>
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-emerald-100 transition-colors duration-300">
                            <item.icon className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Facts Card */}
                <Card
                  className={`border-2 transition-all duration-1000 ease-out hover:shadow-xl opacity-100 translate-y-0`}
                  style={{ transitionDelay: "1000ms" }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Award className="w-5 h-5 text-amber-500" />
                      <h3 className="text-lg font-bold text-gray-900">Results & Outcomes</h3>
                    </div>
                    <div className="">
                      <div
                        className={`transition-all space-y-4 duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                      >
                        {outcomes.map((outcome, index) => (
                          <div
                            key={index}
                            className={`flex items-center gap-4 group hover:bg-white rounded-xl transition-all duration-500 hover:-translate-y-1 transform opacity-100 translate-x-0`}
                            style={{ transitionDelay: `${index * 200 + 1200}ms` }}
                          >
                            <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-gray-600 text-sm md:text-md group-hover:text-gray-800 transition-colors duration-300">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* Empower the Boy Child - Core Mission Section */}
        <section>
          <EmpowerTheBoyChildProjecComponent
            isSectionVisible={isSectionVisible}
            coreRef={coreRef}
          />
        </section>

        {/* Featured Program - Mentorship Circles */}
        <section ref={featuredRef} id="featured-section" className="py-16 md:py-24 bg-white relative overflow-hidden transition-all duration-700 ease-out">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <Badge variant="default" className="bg-gray-900 text-white mb-4 hover:bg-gray-800 transition-colors duration-300">
                <Target className="w-4 h-4 mr-2" />
                Flagship Program
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">Mentorship Circles</h2>
              <div className={`w-24 h-1 bg-gray-900 mx-auto transition-all duration-1000 ease-out delay-300 ${isSectionVisible('featured-section') ? 'w-24' : 'w-0'
                }`}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20 transition-all duration-700 ease-out">
              <div className={`space-y-6 md:space-y-8 px-4 transition-all duration-1000 ease-out ${isSectionVisible('featured-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 transition-colors duration-300">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    Ongoing Program
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-600 text-pretty leading-relaxed">
                  Our cornerstone program pairing boys with positive male role models who provide guidance in academics,
                  career choices, and personal development, creating lasting impact through meaningful relationships.
                </p>

                {/* Enhanced Stats with staggered animation */}
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                  {[
                    { end: 150, label: 'Boys Mentored', width: 'w-4/5' },
                    { end: 70, label: 'Male Mentors', width: 'w-3/5' }
                  ].map((stat, index) => (
                    <div key={index} className={`group transition-all duration-700 ease-out ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`} style={{ transitionDelay: `${index * 200 + 400}ms` }}>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">
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

                <Button className={`bg-gray-900 hover:bg-gray-800 text-white group transition-all duration-700 hover:shadow-lg hover:scale-105 transform w-full sm:w-auto ${isSectionVisible('featured-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: '800ms' }}>
                  <span>Become a Mentor</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className={`relative group transition-all duration-1000 ease-out px-4 ${isSectionVisible('featured-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-900/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="https://i.ibb.co/4RV4hNsc/hero-children.png"
                  alt="Mentorship Circles"
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section ref={overviewRef} id="overview-section" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden transition-all duration-700 ease-out programs-section">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`text-center space-y-4 md:space-y-6 mb-16 md:mb-20 transition-all duration-1000 ease-out ${isSectionVisible('overview-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">Our Five Core Programs</h2>
              <p className="text-lg md:text-xl text-gray-600 text-pretty max-w-3xl mx-auto leading-relaxed px-4">
                Comprehensive support addressing every aspect of a boy's development and growth
              </p>
              <div className={`w-24 h-1 bg-gray-900 mx-auto transition-all duration-1000 ease-out delay-300 ${isSectionVisible('overview-section') ? 'w-24' : 'w-0'
                }`}></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {programComponents.map((component, index) => (
                <Card key={index} className={`text-center p-6 md:p-8 border-gray-200 bg-white hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group hover:bg-gradient-to-br hover:from-white hover:to-emerald-50 ${isSectionVisible('overview-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}>
                  <CardContent className="space-y-4 md:space-y-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 group-hover:bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:rotate-12 transform">
                      <component.icon className="w-7 h-7 md:w-8 md:h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{component.title}</h3>
                    <p className="text-gray-600 text-sm text-pretty leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Programs Grid */}
        <section ref={allProgramsRef} id="all-programs-section" className="py-16 md:py-24 bg-white overflow-hidden transition-all duration-700 ease-out">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`text-center space-y-4 md:space-y-6 mb-16 md:mb-20 transition-all duration-1000 ease-out ${isSectionVisible('all-programs-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">All Programs</h2>
              <p className="text-lg md:text-xl text-gray-600 text-pretty max-w-3xl mx-auto px-4">
                Specialized initiatives working together to empower the boy child
              </p>
              <div className={`w-24 h-1 bg-gray-900 mx-auto transition-all duration-1000 ease-out delay-300 ${isSectionVisible('all-programs-section') ? 'w-24' : 'w-0'
                }`}></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {programs.slice(0).map((program, index) => (
                <Card key={index} className={`overflow-hidden border-gray-100 hover:shadow-2xl transition-all duration-1000 hover:-translate-y-3 group bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 ${isSectionVisible('all-programs-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Floating badge on image */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {program.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </div>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{program.title}</h3>
                      <p className="text-gray-600 text-pretty leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {program.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">Key Outcomes:</h4>
                        <div className="space-y-2">
                          {program.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="flex items-start gap-3 text-sm group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${outcomeIndex * 100}ms` }}>
                              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section ref={ctaRef} id="cta-section" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden transition-all duration-700 ease-out">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

          {/* Animated background elements */}
          <div className={`absolute top-0 left-0 w-full h-full opacity-10 transition-opacity duration-1000 ${isSectionVisible('cta-section') ? 'opacity-10' : 'opacity-0'
            }`}>
            <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-full animate-ping opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 text-center space-y-6 md:space-y-8 relative z-10 transition-all duration-700 ease-out">
            <div className={`transition-all duration-1000 ease-out ${isSectionVisible('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4 md:mb-6 px-4">Ready to Make a Difference?</h2>
            </div>

            <div className={`transition-all duration-1000 ease-out ${isSectionVisible('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '200ms' }}>
              <p className="text-lg md:text-xl text-gray-300 text-pretty max-w-3xl mx-auto leading-relaxed px-4">
                Join us in empowering the next generation of leaders. Every contribution, big or small, creates lasting
                impact in a young person's life.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6 md:pt-8 transition-all duration-1000 ease-out px-4 ${isSectionVisible('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '400ms' }}>
              <Link href={"/donate"}>
                <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 group transition-all duration-300 hover:shadow-xl hover:scale-105 transform active:scale-95 w-full sm:w-auto">
                  <Heart className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:text-emerald-600 transition-all duration-300" />
                  Support Our Programs
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent group transition-all duration-300 hover:scale-105 transform active:scale-95 w-full sm:w-auto"
              >
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Volunteer With Us
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slideInFromRight {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}