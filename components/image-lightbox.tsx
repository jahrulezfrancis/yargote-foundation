"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </Button>
        <img src={src || "/placeholder.svg"} alt={alt} className="max-w-full max-h-full object-contain rounded-lg" />
      </div>
    </div>
  )
}
