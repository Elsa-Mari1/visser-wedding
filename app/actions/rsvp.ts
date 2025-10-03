"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitRsvp(formData: FormData) {
  try {
    console.log("[v0] Supabase URL exists:", !!process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log("[v0] Supabase Key exists:", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    const supabase = await createClient()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const attending = formData.get("attending") === "yes"
    const dietary = formData.get("dietary") as string | null
    const message = formData.get("message") as string | null

    console.log("[v0] Attempting to insert RSVP for:", firstName, lastName)

    const { error } = await supabase.from("rsvps").insert({
      first_name: firstName,
      last_name: lastName,
      email: null,
      phone: null,
      attending,
      number_of_guests: 1, // Default to 1 since field was removed
      dietary_restrictions: dietary || null,
      message: message || null,
    })

    if (error) {
      console.error("[v0] RSVP submission error:", error)
      return { success: false, error: error.message }
    }

    console.log("[v0] RSVP submitted successfully")
    return { success: true }
  } catch (error) {
    console.error("[v0] Unexpected error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}
