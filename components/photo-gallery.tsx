"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function PhotoGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % photos.length)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, currentImageIndex])

  const photos = [
    {
      src: "/back_hug.jpg",
      alt: "Hug from behind",
    },
    // {
    //   src: "/back_spin.jpg",
    //   alt: "Twirl around from behind",
    // },
    // {
    //   src: "/black_white.jpg",
    //   alt: "Black and white moment",
    // },
    {
      src: "/bump_walk.jpg",
      alt: "Walk together",
    },
    {
      src: "/cheek_kiss.jpg",
      alt: "Cheek kiss moment",
    },
    {
      src: "/engaged_shock.jpg",
      alt: "Engaged shock moment",
    },
    {
      src: "/hair_flip.jpg",
      alt: "Hair flip moment",
    },
    {
      src: "/side_hug.jpg",
      alt: "Side hug moment",
    },
    {
      src: "/hand_on_face.jpg",
      alt: "Tender moment",
    },
    {
      src: "/fav_spin.jpg",
      alt: "Favorite spin moment",
    },
    {
      src: "/laugh.jpg",
      alt: "Laughing together",
    },
    {
      src: "/look_back.jpg",
      alt: "Look back moment",
    },
    // {
    //   src: "/nosed_together.jpg",
    //   alt: "Noses together moment",
    // },
    {
      src: "/press_up.jpg",
      alt: "Palms together moment",
    },
    {
      src: "/run_catch.jpg",
      alt: "Run and catch moment",
    },
    {
      src: "/run_fast.jpg",
      alt: "Blurred run moment",
    },
    {
      src: "/second_spin.jpg",
      alt: "Second spin moment",
    },
    {
      src: "/walk_city.jpg",
      alt: "Walking moment",
    },
  ]

  return (
    <section id="photo-gallery" ref={sectionRef} className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">Our Memories</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            A glimpse into our journey together
          </p>
          <p className="text-sm text-muted-foreground/70 mt-4 italic">
            *Click/tap on the images below to view full screen!
          </p>
        </div>
    
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-1000 hover:scale-105 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute cursor-pointer top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              ×
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute cursor-pointer left-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10"
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Image container */}
            <div 
              className="relative w-full h-full flex items-center justify-center p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-7xl max-h-full w-full h-full">
                <Image
                  src={photos[currentImageIndex].src}
                  alt={photos[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute cursor-pointer right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  )
}