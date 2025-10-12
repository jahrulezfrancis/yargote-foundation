"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Users, Mail, Linkedin, User, UserPlus, Calendar, MapPin } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import TimelineComponent from "@/components/Program/timeline"
import { coreValues } from "@/lib/mock-data"
import scrollToSection from "@/utils/scrollTo"
import Link from "next/link"
import TeamMemberCard from "@/components/sections/team-members"
import { useAppStore } from "@/store/useAppStore"
import { TeamMemberGridSkeleton } from "@/components/skeletons/team-member-skeleton"


const missionStatement = [
  {
    icon: Target,
    title: "Our Mission",
    content: "Our mission is to nurture and empower children, youth and women through advocacy, education, life skills, mentorship and community engagement thereby fostering resilience, responsible citizenship and sustainable growth",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Our Vision",
    content: "We envision a world where every child, youth and woman has the opportunity to live with dignity, fulfil their potential and contribute meaningfully to nation development.",
    color: "accent"
  },
  {
    icon: Users,
    title: "Our Impact",
    content: "Over 200 boy children empowered, 40+ mentors engaged, and 10+ communities transformed through our dedicated programs focused on supporting and uplifting the boy child.",
    color: "primary"
  }
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ boys: 0, mentors: 0, communities: 0 })
  const [visibleSections, setVisibleSections] = useState(new Set())

  const { team: teamMembers } = useAppStore()

  const missionRef = useRef(null)
  const storyRef = useRef(null)
  const founderRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    // Animate counters
    const animateCounter = (target: number, key: string, duration = 2000) => {
      const start = 0
      const increment = target / (duration / 16)
      let current = start

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, 16)
    }

    const timer = setTimeout(() => {
      animateCounter(200, 'boys')
      animateCounter(40, 'mentors')
      animateCounter(10, 'communities')
    }, 1000)

    return () => clearTimeout(timer)
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

    const sections = [missionRef.current, storyRef.current, founderRef.current]
    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const isSectonVisible = (sectionId: string) => visibleSections.has(sectionId)

  return (
    <div className="min-h-screen overflow-hidden">
      <main>
        {/* Enhanced Hero Section - About Foundation */}
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
                  <span className="text-sm font-medium text-gray-700">Who We Are</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-slideInFromLeft mb-4" style={{ animationDelay: '0.2s' }}>
                  Yargote Foundation
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
                  Dedicated to nurturing and empowering children, youth and women through comprehensive support programs
                </p>
              </div>

              {/* Mission Statement Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {missionStatement.map((item, index) => (
                  <Card key={index} className={`group hover:shadow-xl transition-all duration-700 border-2 hover:border-emerald-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-500">
                          <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Foundation Stats & Info */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Stats Card */}
                <Card className={`border-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`} style={{ transitionDelay: '900ms' }}>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <div className="w-1 h-6 bg-emerald-600 rounded-full"></div>
                      Our Impact Journey
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                            <Users className="w-5 h-5 text-emerald-600" />
                          </div>
                          <span className="font-medium text-gray-700">Boys Empowered</span>
                        </div>
                        <div className="text-3xl font-bold text-emerald-600 tabular-nums">{counters.boys}+</div>
                      </div>

                      <div className="flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                            <UserPlus className="w-5 h-5 text-emerald-600" />
                          </div>
                          <span className="font-medium text-gray-700">Active Mentors</span>
                        </div>
                        <div className="text-3xl font-bold text-emerald-600 tabular-nums">{counters.mentors}+</div>
                      </div>

                      <div className="flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                            <MapPin className="w-5 h-5 text-emerald-600" />
                          </div>
                          <span className="font-medium text-gray-700">Communities Reached</span>
                        </div>
                        <div className="text-3xl font-bold text-emerald-600 tabular-nums">{counters.communities}+</div>
                      </div>

                      <div className="pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-600">Years of Service</span>
                          <span className="text-lg font-bold text-gray-900">9 Years</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full transition-all duration-[2000ms] ease-out ${isVisible ? 'w-full' : 'w-0'
                            }`}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Info Card */}
                <Card className={`border-2 bg-gradient-to-br from-emerald-50 to-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`} style={{ transitionDelay: '900ms' }}>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <div className="w-1 h-6 bg-emerald-600 rounded-full"></div>
                      Foundation Details
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Calendar className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Established</div>
                          <div className="font-semibold text-gray-900">2015</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          <MapPin className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Headquarters</div>
                          <div className="font-semibold text-gray-900">Abuja, Nigeria</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Target className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Focus Areas</div>
                          <div className="font-semibold text-gray-900">Education, Mentorship, Life Skills</div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-emerald-100">
                        <div className="text-sm text-gray-600 mb-3">Core Values</div>
                        <div className="flex flex-wrap gap-2">
                          {['Balance', 'Responsibility', 'Compassion', 'Discipline'].map((value, i) => (
                            <span key={i} className="px-3 py-1 bg-white text-sm font-medium text-emerald-700 rounded-full border border-emerald-200">
                              {value}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap justify-center items-center gap-4 mt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '1100ms' }}>
                <button
                  onClick={() => scrollToSection("story-section")}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform active:scale-95"
                >
                  Our Story
                </button>
                <button
                  className="px-8 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transform hover:scale-105 active:scale-95"
                  onClick={() => scrollToSection("team-section")}
                >
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section ref={missionRef} id="mission-section" className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Values */}
            <div className="space-y-12">
              <div className={`text-center space-y-4 transition-all duration-1000 ease-out ${isSectonVisible('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '800ms' }}>
                <h2 className="text-3xl lg:text-4xl font-bold">Our Core Values</h2>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                  These principles guide everything we do and shape how we serve our communities
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((value, index) => (
                  <Card key={index} className={`text-center p-6 group hover:shadow-xl transition-all duration-700 hover:scale-105 transform hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2 ${isSectonVisible('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 1000}ms` }}>
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-500 group-hover:rotate-12 transform">
                        <value.icon className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors duration-300">{value.title}</h3>
                      <p className="text-muted-foreground text-pretty text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section ref={storyRef} id="story-section" className="py-20 bg-card overflow-hidden story-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 transition-all duration-1000 ease-out ${isSectonVisible('story-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}>
                <div className="inline-block">
                  <Badge variant="outline" className="mb-4 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300 animate-pulse">
                    Our Journey
                  </Badge>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {[
                    "Yargote Foundation was born from a simple yet powerful observation: boys in underserved communities face unique challenges that often go unaddressed. Founded in 2015, our organization emerged from grassroots efforts to provide mentorship and support to young men who needed guidance the most.",
                    "What started as a small community initiative has grown into a comprehensive foundation serving thousands of boys across multiple communities. Our approach combines traditional mentorship with modern educational support, life skills training, and community engagement.",
                    "Today, we continue to expand our reach while maintaining the personal touch that makes our programs so effective. Every boy we serve is not just a statistic—they're a future leader, innovator, and positive force in their community."
                  ].map((paragraph, index) => (
                    <p key={index}
                      className={`hover:text-gray-700 transition-all duration-500 hover:translate-x-2 transform ${isSectonVisible('story-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      style={{ transitionDelay: `${index * 200 + 400}ms` }}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Story stats */}
                <div className={`grid grid-cols-3 gap-6 pt-6 transition-all duration-1000 ease-out ${isSectonVisible('story-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: '800ms' }}>
                  {[
                    { number: '9', label: 'Years Strong' },
                    { number: '200+', label: 'Boys Served' },
                    { number: '10+', label: 'Communities' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-2xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`relative group transition-all duration-1000 ease-out ${isSectonVisible('story-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="https://i.ibb.co/MyT9Fcvx/founder-kids-CBorbbrl.jpg?height=500&width=600&text=Foundation+History"
                  alt="Yargote Foundation history and growth"
                  className="w-full h-96 object-cover rounded-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Founder Section */}
        <section ref={founderRef} id="founder-section" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ease-out ${isSectonVisible('founder-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <Badge variant="outline" className="mb-2 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300 animate-pulse">
                Leadership
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">Our Founder</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Visionary leadership driving positive change for boys in underserved communities
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className={`overflow-hidden group hover:shadow-2xl transition-all duration-1000 border-0 bg-white/90 backdrop-blur-sm ${isSectonVisible('founder-section') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`} style={{ transitionDelay: '300ms' }}>
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <img
                        src="https://i.ibb.co/SDjtHmf2/yargote-founder.jpg?height=600&width=500&text=Anna+Hussaini+Pai"
                        alt="Anna Hussaini Pai - Founder & Executive Director"
                        className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Floating decorative elements */}
                      <div className="absolute top-4 right-4 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-ping"></div>
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 animate-bounce"></div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                      <div className={`space-y-2 transition-all duration-700 ease-out ${isSectonVisible('founder-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`} style={{ transitionDelay: '500ms' }}>
                        <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-blue-600 transition-colors duration-300">Anna Hussaini Pai</h3>
                        <p className="text-lg font-medium text-emerald-600">Founder & Executive Director</p>
                      </div>

                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        {[
                          "Anna Hussaini Pai is the visionary founder and Executive Director of Yargote Foundation. Her professional journey spans various sectors, including government agencies, consultancy, and education, bringing a wealth of diverse experience to her leadership role.",
                          "She exemplifies inclusive leadership, values input from all stakeholders, and fosters collaboration. As the driving force behind the Empower the Boy Child Project, she believes in empowering individuals to reach their full potential and encourages open communication within her team.",
                          "Anna oversees all aspects of the organization's operations, including program development, fundraising, advocacy, and strategic planning, working closely with stakeholders to ensure the foundation's initiatives align with its vision and goals."
                        ].map((paragraph, index) => (
                          <p key={index}
                            className={`hover:text-gray-700 transition-all duration-500 hover:translate-x-1 transform ${isSectonVisible('founder-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                              }`}
                            style={{ transitionDelay: `${index * 150 + 700}ms` }}>
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className={`space-y-4 transition-all duration-700 ease-out ${isSectonVisible('founder-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '1000ms' }}>
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                          Education & Credentials
                          <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                        </h4>
                        <div className="grid gap-2 text-sm text-muted-foreground">
                          {[
                            "MSc International Business - University of Hertfordshire",
                            "BSc Business Administration - University of Abuja",
                            "Certificate in Project Management - University of Oxford",
                            "PGD in Education - FCT College of Education",
                            "Fellow of the Chartered Institute of Mentoring and Coaching",
                            "Associate Member of Chartered Institute of Personnel Management",
                            "Centre for Management Development Accredited Trainer",
                            "Registered Member of Teachers Registration Council of Nigeria"
                          ].map((credential, index) => (
                            <p key={index}
                              className={`hover:text-gray-700 transition-all duration-300 hover:translate-x-2 transform hover:bg-emerald-50/30 hover:px-2 hover:py-1 hover:rounded ${isSectonVisible('founder-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                }`}
                              style={{ transitionDelay: `${index * 100 + 1200}ms` }}>
                              • {credential}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className={`flex gap-3 pt-4 transition-all duration-700 ease-out ${isSectonVisible('founder-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '1400ms' }}>
                        <a
                          href="mailto:yargotefoundation@gmail.com"
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 group"
                        >
                          <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                          Contact
                        </a>
                        <Link
                          href="https://www.linkedin.com/in/anna-hussaini-pai-30723388/" target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 group"
                        >
                          <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team-section" className="py-20 bg-card team-section">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Dedicated professionals committed to empowering the next generation of leaders
              </p>
            </div>
            {teamMembers.length && teamMembers?
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard member={member} key={index} />
                ))}
              </div>
              :
              <TeamMemberGridSkeleton />
            }
          </div>
        </section>

        {/* Timeline Section with entrance animation */}
        <section className={`transition-all duration-1000 ease-out ${isSectonVisible('founder-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '600ms' }}>
          <TimelineComponent />
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
      `}</style>
    </div>
  )
}