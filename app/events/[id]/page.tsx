"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ArrowLeft, Share2, } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ShareModal from "@/components/shareModal"
import { useShareModal } from "@/hooks/use-share"
import ImagesRenderer from "@/components/sections/render-images"
import splitIntoParagraphs from "@/utils/formartText"
import ContentPageSkeleton from "@/components/skeletons/content-skeleton"
import { useAppStore } from "@/store/useAppStore"

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {

  const {events, loading} = useAppStore()

  const event = events.find((e) => e.id === params.id)

  console.log(params)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const { openShareModal, closeShareModal, isShareModalOpen } = useShareModal()

  if (loading) {
    return <ContentPageSkeleton />
  }

  if (!event) {
    return notFound()
  }

  const paragraphContent = splitIntoParagraphs(event.description, 1)

  const handleShareClick = () => {
    openShareModal({
      title: "Custom Title",
      description: "Custom description for this specific page"
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-slate-900/50"></div>
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
                    <div className="space-y-8">
                      {paragraphContent.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-slate-700 leading-relaxed text-lg"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Image gallery section */}
                  {event.images && event.images.length > 0 && <ImagesRenderer title={event.title} images={event.images ?? []} />}
                  {event.videos && event.videos.length > 0 &&
                    event.videos.map((videoUrl, index) => (
                      <div key={index} className="w-full aspect-video">
                        <video
                          src={videoUrl}
                          controls
                          className="w-full h-full object-cover rounded-lg"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))
                  }
                </div>

                {/* Sidebar */}
                <div className="space-y-8 w-full">
                  {/* Event Details Card */}
                  <Card className="border-slate-200 shadow-sm w-full md:w-100">
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
                            <div className="text-slate-600">{event.location.slice(0, 37)}</div>
                            <div className="text-slate-600">{event.location.slice(37)}</div>
                          </div>
                        </div>
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

                  <div className="w-full md:w-100">
                    <Card className="border-slate-200 shadow-sm">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Get Involved</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          Interested in volunteering or learning more about our events? Contact us to find out how you can
                          make a difference in our community.
                        </p>
                        <div className="flex max-w-full">
                          <Button asChild variant="outline" className="w-[60%] border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-gray-800 hover:border-emerald-300">
                            <Link href="/contact">Contact Us</Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="ml-4 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-gray-800 hover:border-slate-300"
                            onClick={handleShareClick}
                          >
                            <Share2 />
                            Share Event
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <ShareModal
                    isOpen={isShareModalOpen}
                    onClose={closeShareModal}
                  />

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}