"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export function WeddingDetails() {
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

  const details = [
    {
      icon: Calendar,
      title: "Date",
      content: "Saturday, February 14, 2026",
    },
    {
      icon: Clock,
      title: "Time",
      content: "Ceremony at 4:00 PM",
    },
    {
      icon: MapPin,
      title: "Venue",
      content: "Beuld The Venue",
    },
    {
      icon: Users,
      title: "Dress Code",
      content: "Semi Formal",
    },
  ]

  return (
    <section id="wedding-details" ref={sectionRef} className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">Wedding Details</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Join us as we celebrate our love and commitment to each other
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {details.map((detail, index) => (
    <div
      key={index}
      className={`text-center bg-muted/20 rounded-xl p-6 shadow-sm hover:shadow-md 
        transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
        <detail.icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-serif text-xl md:text-2xl mb-1 text-foreground">{detail.title}</h3>
      <p className="text-muted-foreground text-balance">{detail.content}</p>
    </div>
  ))}
</div>


        {/* <div
          className={`mt-16 p-8 bg-muted/50 rounded-lg transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-4 text-center text-foreground">Schedule of Events</h3>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <span className="font-medium text-foreground">Ceremony</span>
              <span className="text-muted-foreground">4:00 PM - 4:45 PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-3">
              <span className="font-medium text-foreground">Cocktail Hour</span>
              <span className="text-muted-foreground">5:00 PM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-3">
              <span className="font-medium text-foreground">Reception</span>
              <span className="text-muted-foreground">6:00 PM - 11:00 PM</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
