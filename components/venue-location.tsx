"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VenueLocation() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const venueAddress = "123 Garden Lane, Beautiful City, ST 12345"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Roodehoogte, Robertson, 6705"
)}`;

  return (
    <section id="venue-location" ref={sectionRef} className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">Venue Location</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Join us at this beautiful location
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2 text-foreground">Beuld The Venue</h3>
              <p className="text-lg text-muted-foreground">{venueAddress}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-lg mb-2 text-foreground">Parking Information</h4>
                <p className="text-muted-foreground">
                  Complimentary valet parking is available for all guests.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2 text-foreground">Accommodations</h4>
                <p className="text-muted-foreground">
                  We have reserved room blocks at nearby hotels. Please visit our wedding website for more details and
                  booking information.
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full md:w-auto">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <img src="/elegant-garden-venue-with-fountain.jpg" alt="Venue location" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
