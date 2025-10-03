"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitRsvp(formData: FormData) {
  try {
    const supabase = await createClient()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string | null
    const phone = formData.get("phone") as string | null
    const attending = formData.get("attending") === "yes"
    const guests = Number.parseInt(formData.get("guests") as string)
    const dietary = formData.get("dietary") as string | null
    const message = formData.get("message") as string | null

    const { error } = await supabase.from("rsvps").insert({
      first_name: firstName,
      last_name: lastName,
      email: email || null,
      phone: phone || null,
      attending,
      number_of_guests: guests,
      dietary_restrictions: dietary || null,
      message: message || null,
    })

    if (error) {
      console.error("[v0] RSVP submission error:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Unexpected error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
