"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react"

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-4 gap-4 h-[50vh] md:h-[60vh] lg:h-[70vh]">
          {/* Main Image */}
          <div
            className="col-span-4 md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => {
              setSelectedIndex(0)
              setIsLightboxOpen(true)
            }}
          >
            <img
              src={images[0] || "/placeholder.svg"}
              alt={`${title} - Main`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-300 flex items-center justify-center">
              <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Secondary Images */}
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="hidden md:block relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => {
                setSelectedIndex(index + 1)
                setIsLightboxOpen(true)
              }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} - ${index + 2}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-300" />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-neutral-900/60 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">+{images.length - 5} more</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <button
          className="md:hidden w-full mt-4 py-3 text-[14px] font-medium text-neutral-600 border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors"
          onClick={() => setIsLightboxOpen(true)}
        >
          View All {images.length} Photos
        </button>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] mx-6">
            <img
              src={images[selectedIndex] || "/placeholder.svg"}
              alt={`${title} - ${selectedIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full">
            <span className="text-white text-[14px]">
              {selectedIndex + 1} / {images.length}
            </span>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-full px-6 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                  selectedIndex === index ? "ring-2 ring-white" : "opacity-50 hover:opacity-100"
                }`}
              >
                <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
