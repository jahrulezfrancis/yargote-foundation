"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { EventCard } from "@/components/event-card"
import { Calendar, Users, MapPin, Sparkles, TrendingUp, Award, PartyPopper, Megaphone, Footprints } from "lucide-react"
import scrollToSection from "@/utils/scrollTo"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useAppStore } from "@/store/useAppStore"

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())

  const { events } = useAppStore()

  const upcomingRef = useRef(null)
  const pastRef = useRef(null)

  const upcomingEvents = events.filter((event) => event.status === "upcoming")
  const pastEvents = events.filter((event) => event.status === "past")

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

    const sections = [upcomingRef.current, pastRef.current]
    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const isSectionVisible = (sectionId: string) => visibleSections.has(sectionId)

  return (
    <div className="min-h-screen overflow-hidden">
      <main>
        {/* Enhanced Hero Section - Events Overview */}
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
                  <span className="text-sm font-medium text-gray-700">Events & Activities</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-slideInFromLeft mb-4" style={{ animationDelay: '0.2s' }}>
                  Join Our Community Events
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
                  Participate in workshops, fundraisers, and community gatherings that bring together mentors, participants, and supporters
                </p>
              </div>

              {/* Event Types Quick Cards */}
              <div className="grid md:grid-cols-4 gap-4 mb-12">
                {[
                  { icon: Megaphone, name: "Workshops & Seminar", color: "purple", count: "5" },
                  { icon: PartyPopper, name: "Fundraisers", color: "blue", count: "3" },
                  { icon: Users, name: "Community Gatherings", color: "purple", count: "8" },
                  { icon: Award, name: "Empower The Boy Child Summit", color: "blue", count: "4" }
                ].map((type, index) => (
                  <Card key={index} className={`group hover:shadow-lg transition-all duration-500 border-2 hover:border-${type.color}-200 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                    <CardContent className="p-6 text-center space-y-3">
                      <div className={`w-12 h-12 bg-${type.color}-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-${type.color}-100 group-hover:scale-110 transition-all duration-500`}>
                        <type.icon className={`w-6 h-6 text-${type.color}-600 transition-all duration-500`} />
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {type.name}
                      </h3>
                      <p className="text-xs text-gray-500">{type.count} Events</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Event Stats & Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Event Statistics Card */}
                <Card className={`border-2 transition-all duration-1000 ease-out hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`} style={{ transitionDelay: '700ms' }}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-gray-900">Event Statistics</h3>
                    </div>
                    <div className="space-y-6">
                      <div className="group cursor-default">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Upcoming Events</span>
                          <span className="text-2xl font-bold text-emerald-600 tabular-nums">
                            {upcomingEvents.length}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-emerald-600 rounded-full transition-all duration-[1500ms] ease-out ${isVisible ? 'w-[70%]' : 'w-0'
                            }`}></div>
                        </div>
                      </div>

                      <div className="group cursor-default">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Past Events</span>
                          <span className="text-2xl font-bold text-primary-yellow tabular-nums">
                            {pastEvents.length}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-primary-yellow rounded-full transition-all duration-[1500ms] ease-out delay-200 ${isVisible ? 'w-[85%]' : 'w-0'
                            }`}></div>
                        </div>
                      </div>

                      <div className="group cursor-default">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Total Attendees</span>
                          <span className="text-2xl font-bold text-emerald-600 tabular-nums">300+</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-emerald-600 rounded-full transition-all duration-[1500ms] ease-out delay-400 ${isVisible ? 'w-[90%]' : 'w-0'
                            }`}></div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Lives Impacted</span>
                          <span className="text-lg font-bold text-primary-yellow`">500+</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Next Event Card */}
                <Card className={`border-2 bg-gradient-to-br from-emerald-50 to-white transition-all duration-1000 ease-out hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`} style={{ transitionDelay: '800ms' }}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-gray-900">Next Event</h3>
                    </div>

                    {upcomingEvents.length > 0 ? (
                      <div className="space-y-4">
                        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`} style={{ transitionDelay: '900ms' }}>
                          <h4 className="font-bold text-gray-900 mb-2">{upcomingEvents[0].title}</h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Calendar className="w-4 h-4 text-emerald-600" />
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Date</div>
                                <div className="text-sm font-medium text-gray-900">
                                  {upcomingEvents[0].date}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                <MapPin className="w-4 h-4 text-emerald-600" />
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Location</div>
                                <div className="text-sm font-medium text-gray-900">{upcomingEvents[0].location}</div>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Users className="w-4 h-4 text-emerald-600" />
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Attendees</div>
                                <div className="text-sm font-medium text-gray-900">{upcomingEvents[0].attendees} registered</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link href={`/events/${upcomingEvents[0].id}`}>
                          <button
                            className="w-full mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 transform text-sm font-medium"
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Calendar className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-500">No upcoming events scheduled</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Event Categories Card */}
                <Card className={`border-2 transition-all duration-1000 ease-out hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`} style={{ transitionDelay: '900ms' }}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <h3 className="text-lg font-bold text-gray-900">Event Types</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { icon: Megaphone, label: "Workshops & Seminars", color: "purple" },
                        { icon: PartyPopper, label: "Fundraising Events & Activities", color: "blue" },
                        { icon: Users, label: "Community Gatherings (Stakeholders Engagement)", color: "purple" },
                        { icon: Award, label: "Empower The Boy Child Summit", color: "blue" },
                        { icon: Footprints, label: "International Day of The Boy Child Road Walk", color: "purple" }
                      ].map((item, index) => (
                        <div key={index} className={`flex items-center gap-3 group hover:bg-gray-50 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`} style={{ transitionDelay: `${index * 100 + 1000}ms` }}>
                          <div className={`w-8 h-8 bg-${item.color}-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-${item.color}-100 transition-colors duration-300`}>
                            <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* <div className={`pt-6 border-t border-gray-100 mt-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`} style={{ transitionDelay: '1400ms' }}>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-50 text-xs font-medium text-emerald-700 rounded-full border border-emerald-200">
                          Monthly
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-xs font-medium text-blue-700 rounded-full border border-blue-200">
                          Free Entry
                        </span>
                        <span className="px-3 py-1 bg-purple-50 text-xs font-medium text-purple-700 rounded-full border border-purple-200">
                          Open to All
                        </span>
                      </div>
                    </div> */}
                  </CardContent>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap justify-center items-center gap-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '1000ms' }}>
                <button
                  onClick={() => scrollToSection("upcoming-section")}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform active:scale-95 flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section ref={upcomingRef} id="upcoming-section" className="py-20 bg-background upcoming-section">
          <div className="container mx-auto px-4">
            <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ease-out ${isSectionVisible('upcoming-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h2 className="text-3xl lg:text-4xl font-bold">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Don't miss these exciting opportunities to get involved and support our mission
              </p>
              <div className={`w-24 h-1 bg-gray-900 mx-auto transition-all duration-1000 ease-out delay-300 ${isSectionVisible('upcoming-section') ? 'w-24' : 'w-0'
                }`}></div>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`transition-all duration-700 ease-out hover:scale-105 ${isSectionVisible('upcoming-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-12 transition-all duration-1000 ease-out ${isSectionVisible('upcoming-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-muted-foreground text-lg">
                  No upcoming events at the moment. Check back soon for new opportunities to get involved!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section ref={pastRef} id="past-section" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ease-out ${isSectionVisible('past-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h2 className="text-3xl lg:text-4xl font-bold">Past Events</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Take a look at some of our recent successful events and activities
              </p>
              <div className={`w-24 h-1 bg-gray-900 mx-auto transition-all duration-1000 ease-out delay-300 ${isSectionVisible('past-section') ? 'w-24' : 'w-0'
                }`}></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`transition-all duration-700 ease-out hover:scale-105 ${isSectionVisible('past-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <EventCard event={event} />
                </div>
              ))}
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
      `}</style>
    </div>
  )
}