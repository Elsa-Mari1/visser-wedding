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
              Steven and Elsa-Mari met at a speed dating event at church. Elsa-Mari's best friend, Jeanne-Marie,
              convinced her to go—even though she wasn't too keen at first. To make it easier, she brought her brother,
              Jacques, along so she'd know someone there.
              <br />
              <br />
              It wasn't love at first sight for either of us, but after the holidays, Elsa-Mari finally replied to
              Steven, and they went on their first date: a walk along the Sea Point Promenade. Their second date was a
              sunset walk on Kloof Corner, and the third was a quick coffee before church. The very next week, after the
              service, Steven asked if he could cook dinner for Elsa-Mari at his flat—and that Thursday, when she saw
              him walking down the stairs to welcome her, she started to feel butterflies. Over dinner, she realized
              this guy was something special. From there, they were hooked.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">The Beginning of Us</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Soon after, Elsa-Mari invited Steven to join her family on holiday at Simola in Knysna. At the Knysna
              Waterfront, Steven read her a poem and asked her to be his girlfriend. That was the moment their
              relationship officially began—and from then on, their story has been one of love, adventure, and growing
              together.
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
              Now, they're excited to start this new chapter of their lives together, surrounded by the people they love
              most. They can't wait to celebrate with you and create new memories that will last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
