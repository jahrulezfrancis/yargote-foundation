import { Badge } from "@/components/ui/badge"
import { EventCard } from "@/components/event-card"
import { mockEvents } from "@/lib/mock-data"

export default function EventsPage() {
  const upcomingEvents = mockEvents.filter((event) => event.status === "upcoming")
  const pastEvents = mockEvents.filter((event) => event.status === "past")

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-br from-background to-card py-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/community-volunteers-with-children.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                Events & Activities
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance text-white">Join Us in Making a Difference</h1>
              <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
                Participate in our community events, workshops, and fundraisers that bring together mentors,
                participants, and supporters to create positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Don't miss these exciting opportunities to get involved and support our mission
              </p>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No upcoming events at the moment. Check back soon for new opportunities to get involved!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Past Events</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Take a look at some of our recent successful events and activities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
