"use client"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"

export function OurStory() {
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

  return (
    <section id="our-story" ref={sectionRef} className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">Our Story</h2>
        </div>

        <div className="space-y-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">How We Met</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our story began on a rainy autumn evening at a cozy coffee shop in downtown. Sarah was reading her
              favorite book, and Michael accidentally spilled his coffee while trying to grab the last available seat.
              What started as an awkward apology turned into hours of conversation, laughter, and the beginning of
              something beautiful.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">The Proposal</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Three years later, Michael planned a surprise trip back to that same coffee shop. After a beautiful
              dinner, he led Sarah to their special corner table, now decorated with candles and flowers. As the rain
              gently tapped against the windows, just like that first night, he got down on one knee and asked her to
              spend forever with him. Through happy tears, she said yes.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">Looking Forward</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Now, we're excited to start this new chapter of our lives together, surrounded by the people we love most.
              We can't wait to celebrate with you and create new memories that will last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
