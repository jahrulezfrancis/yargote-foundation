import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react"
import { mockEvents } from "@/lib/mock-data"
import Link from "next/link"
import { notFound } from "next/navigation"

interface EventPageProps {
  params: {
    id: string
  }
}

const categoryColors = {
  workshop: "bg-emerald-50 text-emerald-700 border-emerald-200",
  fundraiser: "bg-emerald-50 text-emerald-700 border-emerald-200",
  community: "bg-emerald-50 text-emerald-700 border-emerald-200",
  training: "bg-emerald-50 text-emerald-700 border-emerald-200",
}

export default function EventPage({ params }: EventPageProps) {
  const event = mockEvents.find((e) => e.id === params.id)

  if (!event) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-32"
          style={{ backgroundImage: `url(${event.image || "/placeholder.svg"})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-900/50"></div>
          <div className="relative container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Button asChild variant="ghost" className="mb-8 text-white/90 hover:text-white hover:bg-white/10">
                <Link href="/events" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Events
                </Link>
              </Button>

              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm font-medium">
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </Badge>
                  <Badge 
                    className={event.status === "upcoming" 
                      ? "bg-emerald-500/90 hover:bg-emerald-600 text-white border-emerald-500/30 backdrop-blur-sm" 
                      : "bg-white/20 text-white border-white/30 backdrop-blur-sm"
                    }
                  >
                    {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                  </Badge>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                  {event.title}
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl font-light drop-shadow-md">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                
                {/* Event Content and Details */}
                <div className="lg:col-span-2 space-y-12">
                  
                  {/* Event Description */}
                  <div className="prose prose-slate prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Event</h2>
                    <p className="text-slate-600 leading-relaxed">
                      Join us for this exciting {event.category} event where community members come together 
                      to make a positive impact. This event provides an opportunity to connect with like-minded 
                      individuals and contribute to meaningful causes in our community.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Whether you're a first-time participant or a regular volunteer, this event welcomes 
                      everyone who wants to be part of positive change. Come ready to learn, engage, and 
                      make lasting connections.
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  
                  {/* Event Details Card */}
                  <Card className="border-slate-200 shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-6">Event Details</h3>

                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Date</div>
                            <div className="text-slate-600">{formatDate(event.date)}</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Clock className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Time</div>
                            <div className="text-slate-600">{event.time}</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Location</div>
                            <div className="text-slate-600">{event.location}</div>
                          </div>
                        </div>

                        {event.attendees && (
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                              <Users className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900 mb-1">Attendees</div>
                              <div className="text-slate-600">
                                {event.attendees} {event.maxAttendees && `/ ${event.maxAttendees}`} people
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {event.status === "upcoming" && (
                        <div className="pt-8 border-t border-slate-100 mt-8">
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm py-3 text-base font-semibold">
                            Register Now
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Get Involved Card */}
                  <Card className="border-slate-200 shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Get Involved</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        Interested in volunteering or learning more about our events? Contact us to find out how you can
                        make a difference in our community.
                      </p>
                      <Button asChild variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Share Section */}
                  <Card className="border-slate-200 shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Share This Event</h3>
                      <p className="text-slate-600 text-sm mb-4">
                        Help spread the word about this event
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50">
                          Share
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50">
                          Copy Link
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}