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
      content: `Formal with a summer touch.
Gentlemen: tie optional. Ladies: floor-length or cocktail dress.`,
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



      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {details.slice(0, 3).map((detail, index) => (
          <div key={index} className="text-center bg-muted/20 rounded-xl p-6 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
              <detail.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl mb-1 text-foreground">{detail.title}</h3>
            <p className="text-muted-foreground">{detail.content}</p>
          </div>
        ))}
        </div>

        <div className="mt-8">
          <div className="text-center bg-muted/20 rounded-xl p-6 shadow-sm">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif text-2xl mb-2 text-foreground">Dress Code</h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-bold">
              Summer formal
            </p>
            <p className="text-muted-foreground/70 max-w-xl text-md mx-auto italic">
              Gentlemen to wear formal pants and a tie — jackets are optional (we know February can be warm!) 
              Ladies can opt for a floor-length gown or a formal cocktail dress. 
              We can&apos;t wait to celebrate with you in style!
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
