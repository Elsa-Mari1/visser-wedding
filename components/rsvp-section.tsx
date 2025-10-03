"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitRsvp } from "@/app/actions/rsvp"
import { CheckCircle2 } from "lucide-react"

export function RsvpSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitRsvp(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.error || "Failed to submit RSVP. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="rsvp" ref={sectionRef} className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Thank You!</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            We've received your RSVP and can't wait to celebrate with you!
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" ref={sectionRef} className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">RSVP</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Please let us know if you can join us for our special day
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" required placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" required placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="attending">Will you attend? *</Label>
            <Select name="attending" defaultValue="yes" required>
              <SelectTrigger id="attending">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Joyfully Accept</SelectItem>
                <SelectItem value="no">Regretfully Decline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietary">Dietary Restrictions</Label>
            <Input id="dietary" name="dietary" placeholder="Any allergies or dietary preferences?" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message for the Couple</Label>
            <Textarea id="message" name="message" placeholder="Share your well wishes..." rows={4} />
          </div>

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit RSVP"}
          </Button>
        </form>
      </div>
    </section>
  )
}
