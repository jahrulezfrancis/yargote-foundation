"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"
import Link from "next/link"
import type { EventType } from "@/lib/types"

interface EventCardProps {
  event: EventType
}

const categoryColors = {
  workshop: "bg-primary/10 text-primary border-primary/20",
  fundraiser: "bg-accent/10 text-accent-foreground border-accent/20",
  community: "bg-warning/10 text-warning-foreground border-warning/20",
  training: "bg-secondary/10 text-secondary-foreground border-secondary/20",
}

export function EventCard({ event }: EventCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <Card className="group overflow-hidden border-0 premium-shadow hover:premium-shadow-lg transition-all duration-500 hover-lift bg-card">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <div className="aspect-[16/10] relative">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
                onClick={() => setLightboxOpen(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className={`${categoryColors[event.category]} font-medium px-3 py-1 text-xs`}>
                {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge
                variant={event.status === "upcoming" ? "default" : "secondary"}
                className={
                  event.status === "upcoming"
                    ? "bg-accent text-accent-foreground font-medium px-3 py-1"
                    : "bg-muted text-muted-foreground font-medium px-3 py-1"
                }
              >
                {event.status === "upcoming" ? "Upcoming" : "Past Event"}
              </Badge>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-balance text-foreground group-hover:text-primary transition-colors duration-300">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-pretty leading-relaxed line-clamp-3">{event.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{event.time}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{event.location}</span>
              </div>
              {event.attendees && (
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">
                    {event.attendees} {event.maxAttendees && `/ ${event.maxAttendees}`} attendees
                  </span>
                </div>
              )}
            </div>

            {event.status === "upcoming" && (
              <Button
                asChild
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group/btn transition-all duration-200"
              >
                <Link href={`/events/${event.id}`} className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            )}
            {event.status === "past" && (
              <Button
                asChild
                variant="outline"
                className="w-full h-12 text-foreground/80 hover:text-foreground hover:bg-emerald-100 font-semibold group/btn transition-all duration-200"
              >
                <Link href={`/events/${event.id}`} className="flex items-center justify-center gap-2">
                  View Past Event
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <ImageLightbox
        src={event.image || "/placeholder.svg"}
        alt={event.title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
