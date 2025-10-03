import { HeroSection } from "@/components/hero-section"
import { WeddingDetails } from "@/components/wedding-details"
import { RsvpSection } from "@/components/rsvp-section"
import { OurStory } from "@/components/our-story"
import { VenueLocation } from "@/components/venue-location"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"

export default function WeddingInvite() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WeddingDetails />
      <OurStory />
      <PhotoGallery />
      <VenueLocation />
      <RsvpSection />
      <Footer />
    </main>
  )
}
