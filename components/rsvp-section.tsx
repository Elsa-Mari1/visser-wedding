"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitRsvp } from "@/app/actions/rsvp"
import { CheckCircle2, Heart } from "lucide-react"
import confetti from "canvas-confetti"

export function RsvpSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
  if (isSubmitted) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }
}, [isSubmitted])

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
      <section id="rsvp" ref={sectionRef} className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">Thank You!</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
            We've received your RSVP and can't wait to celebrate with you!
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary">
            <Heart className="w-5 h-5 fill-current" />
            <Heart className="w-4 h-4 fill-current" />
            <Heart className="w-5 h-5 fill-current" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" ref={sectionRef} className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-2xl mx-auto relative">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-4">
            <Heart className="w-8 h-8 text-primary fill-current mx-auto" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">RSVP</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
            Please let us know if you can join us for our special day
          </p>
        </div>

        <div
  className={`bg-card border border-border rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm 
    transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
  style={{ transitionDelay: "200ms" }}
>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  required 
                  placeholder="John"
                  className="h-11 border-muted-foreground/20 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  required 
                  placeholder="Doe"
                  className="h-11 border-muted-foreground/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="attending" className="text-sm font-medium">Will you attend? *</Label>
              <Select name="attending" defaultValue="yes" required>
                <SelectTrigger id="attending" className="h-11 border-muted-foreground/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">✨ Joyfully Accept</SelectItem>
                  <SelectItem value="no">💔 Regretfully Decline</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietary" className="text-sm font-medium">Dietary Restrictions</Label>
              <Input 
                id="dietary" 
                name="dietary" 
                placeholder="Any allergies or dietary preferences?"
                className="h-11 border-muted-foreground/20 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">Message for the Couple</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Share your well wishes..." 
                rows={4}
                className="border-muted-foreground/20 focus:border-primary transition-colors resize-none"
              />
            </div>

            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg animate-in fade-in slide-in-from-top-2">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit RSVP"}
</Button>

          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Need to make changes? Contact us directly.
        </p>
      </div>
    </section>
  )
}