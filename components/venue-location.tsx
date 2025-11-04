"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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

  const venueAddress = "Roodehoogte, Robertson, 6705"
  // Direct link to Beuld The Venue on Google Maps
  const googleMapsUrl = "https://www.google.com/maps/place/Beuld+The+Venue/@-33.7982758,19.9054357,17z/data=!3m1!4b1!4m6!3m5!1s0x1dd269b9469dd431:0x9ed7394ca7afe06!8m2!3d-33.7982804!4d19.9103066!16s%2Fg%2F11ts99x1wn"

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
                <h4 className="font-medium text-lg mb-2 text-foreground">Parking & Shuttle Information</h4>
                    <p className="text-muted-foreground">
                      There is parking available at the venue for guests who are driving.  
                      If you are staying in town, a convenient shuttle service will be running to and from the venue.  
                      Pickups are available anywhere from Robertson CBD up to Silwerstrand, at a cost of R125 per person for a return trip (indicate if you want to use it in the RSVP form below) — you can simply pay when you hop on.
                    </p>

              </div>

              <div>
                <h4 className="font-medium text-lg mb-2 text-foreground">Accommodations</h4>
                <p className="text-muted-foreground">
                  Please see the next section for more details.
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
            <Image 
              src="/beuld_venue.jpg" 
              alt="Beuld The Venue" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}