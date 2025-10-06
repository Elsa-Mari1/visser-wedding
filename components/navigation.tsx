"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Our story", href: "#our-story" },
    { label: "Gallery", href: "#photo-gallery" },
    { label: "Details", href: "#wedding-details" },
    { label: "Venue", href: "#venue-location" },
    { label: "Accommodation", href: "#accommodation" },
    { label: "RSVP", href: "#rsvp" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 300)
  }

  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background transition"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center text-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-primary transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Logo / Initials */}
            <div className="mb-12">
              <p className="text-white text-3xl font-serif tracking-wide">S & E</p>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-white text-lg md:text-xl font-light tracking-wide hover:text-primary transition-all"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Footer Info */}
            <div className="mt-16 text-white/70 text-sm">
              <p>Steven & Elsa-Mari</p>
              <p>14 February 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
