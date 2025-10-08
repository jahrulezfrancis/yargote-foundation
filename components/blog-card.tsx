"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/types"
import { ImageLightbox } from "@/components/image-lightbox"
import Link from "next/link"

interface BlogCardProps {
  post: BlogPost
}

const categoryColors = {
  "success-story": "bg-accent/10 text-accent-foreground border-accent/20",
  "program-update": "bg-primary/10 text-primary border-primary/20",
  "community-news": "bg-warning/10 text-warning-foreground border-warning/20",
  "impact-report": "bg-secondary/10 text-secondary-foreground border-secondary/20",
}

const categoryLabels = {
  "success-story": "Success Story",
  "program-update": "Program Update",
  "community-news": "Community News",
  "impact-report": "Impact Report",
}

export function BlogCard({ post }: BlogCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
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
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
                onClick={() => setLightboxOpen(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="absolute top-4 left-4">
              <Badge className={`${categoryColors[post.category]} font-medium px-3 py-1 text-xs`}>
                {categoryLabels[post.category]}
              </Badge>
            </div>
          </div>

          <div className="p-4 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-balance text-foreground group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-pretty leading-relaxed line-clamp-3">{post.excerpt}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
                    <User className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
                    <Calendar className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-medium">{formatDate(post.date)}</span>
                </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">{post.readTime} min</span>
              </div>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full h-12 border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold group/btn transition-all duration-200 bg-transparent"
            >
              <Link href={`/blog/${post.id}`} className="flex items-center justify-center gap-2">
                Read Full Story
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <ImageLightbox
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
