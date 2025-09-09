"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageLightbox } from "./image-lightbox"

const recentImages = [
  {
    id: 1,
    src: "/diverse-group-of-young-boys-in-mentorship-program-.jpg",
    caption: "Boys participating in our mentorship program",
    alt: "Young boys engaged in mentorship activities",
  },
  {
    id: 2,
    src: "/boys-in-educational-workshop-learning-life-skills-.jpg",
    caption: "Educational workshop on life skills development",
    alt: "Boys learning life skills in workshop",
  },
  {
    id: 3,
    src: "/boys-playing-sports-together.jpg",
    caption: "Sports and recreation activities",
    alt: "Boys playing sports together",
  },
  {
    id: 4,
    src: "/community-volunteers-with-children.jpg",
    caption: "Community volunteers making a difference",
    alt: "Volunteers working with children",
  },
  {
    id: 5,
    src: "/graduation-ceremony-for-program-participants.jpg",
    caption: "Celebrating program graduates",
    alt: "Graduation ceremony for participants",
  },
  {
    id: 6,
    src: "/boys-reading-books-in-library.jpg",
    caption: "Reading and literacy programs",
    alt: "Boys reading in library",
  },
]

export function RecentImagesGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof recentImages)[0] | null>(null)

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Moments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing the impact and joy of our programs through the lens of community and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageLightbox
          images={recentImages}
          currentIndex={recentImages.findIndex((img) => img.id === selectedImage.id)}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  )
}
