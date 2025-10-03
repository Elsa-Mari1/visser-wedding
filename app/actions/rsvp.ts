"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitRsvp(formData: FormData) {
  try {
    const supabase = await createClient()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const attending = formData.get("attending") === "yes"
    const dietary = formData.get("dietary") as string | null
    const message = formData.get("message") as string | null

    const { error } = await supabase.from("rsvps").insert({
      first_name: firstName,
      last_name: lastName,
      attending,
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
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}
