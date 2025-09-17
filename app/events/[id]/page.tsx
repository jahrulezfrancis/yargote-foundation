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
  workshop: "bg-blue-100 text-blue-800",
  fundraiser: "bg-purple-100 text-purple-800",
  community: "bg-green-100 text-green-800",
  training: "bg-orange-100 text-orange-800",
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
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-8">
                <Link href="/events" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Events
                </Link>
              </Button>

              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <Badge className={categoryColors[event.category]}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </Badge>
                  <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>
                    {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                  </Badge>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-balance">{event.title}</h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Event Image */}
                <div className="lg:col-span-2">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>

                {/* Event Info */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">Event Details</h3>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-accent" />
                          <div>
                            <div className="font-medium">Date</div>
                            <div className="text-muted-foreground">{formatDate(event.date)}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-accent" />
                          <div>
                            <div className="font-medium">Time</div>
                            <div className="text-muted-foreground">{event.time}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-accent" />
                          <div>
                            <div className="font-medium">Location</div>
                            <div className="text-muted-foreground">{event.location}</div>
                          </div>
                        </div>

                        {event.attendees && (
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-accent" />
                            <div>
                              <div className="font-medium">Attendees</div>
                              <div className="text-muted-foreground">
                                {event.attendees} {event.maxAttendees && `/ ${event.maxAttendees}`} people
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {event.status === "upcoming" && (
                        <div className="pt-4">
                          <Button className="w-full">Register Now</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">Get Involved</h3>
                      <p className="text-muted-foreground text-pretty leading-relaxed">
                        Interested in volunteering or learning more about our events? Contact us to find out how you can
                        make a difference.
                      </p>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
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
