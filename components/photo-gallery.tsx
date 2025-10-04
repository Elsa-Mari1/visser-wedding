"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function PhotoGallery() {
  const [isVisible, setIsVisible] = useState(false)
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

  const photos = [
 
  
    {
      src: "/constantia_glen.jpg",
      alt: "At Constantia Glen",
    },
       {
      src: "/knysna_pool.jpg",
      alt: "Pool in Knysna",
    },
     {
      src: "/simola_padel.jpg",
      alt: "Playing padel at Simola",
    },
      {
      src: "/knysna_red2.jpg",
      alt: "Together in Knysna2",
    },
    {
      src: "/allee_blue.jpg",
      alt: "Allee Bleue wine estate",
    },
    {
      src: "/360_couple.jpg",
      alt: "360 degree couple photo",
    },
    {
      src: "/pink_ernie_els.jpg",
      alt: "At Ernie Els winery",
    },
    {
      src: "/side_hug.jpg",
      alt: "Side hug moment",
    },
       {
      src: "/hand_on_face.jpg",
      alt: "Tender moment",
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-1000 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}