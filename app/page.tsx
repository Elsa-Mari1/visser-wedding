import { HeroSection } from "@/components/hero-section"
import { WeddingDetails } from "@/components/wedding-details"
import { RsvpSection } from "@/components/rsvp-section"
import { OurStory } from "@/components/our-story"
import { VenueLocation } from "@/components/venue-location"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { AccommodationSection } from "@/components/accommodation"

export default function WeddingInvite() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurStory />
      <PhotoGallery />
      <WeddingDetails />
      <VenueLocation />
      <AccommodationSection />
      <RsvpSection />
      <Footer />
    </main>
  )
}
