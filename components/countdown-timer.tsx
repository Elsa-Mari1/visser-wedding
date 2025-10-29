"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
  variant?: "default" | "subtle-box" | "glass" | "bottom"
}

export function CountdownTimer({ targetDate, variant = "default" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      const diff = +new Date(targetDate) - +new Date()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const transitionClass = `transition-all duration-1000 delay-300 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`

  // Option 1: Default with subtle background
  if (variant === "subtle-box") {
    return (
      <div className={transitionClass}>
        <div className="inline-block bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
          <div className="flex items-baseline gap-3 text-white text-sm md:text-base font-light">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-serif">{timeLeft.days}</span>
              <span className="text-xs uppercase tracking-wider opacity-80">days</span>
            </div>
            <span className="opacity-50">•</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-serif">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-xs uppercase tracking-wider opacity-80">hours</span>
            </div>
            <span className="opacity-50">•</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-serif">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-xs uppercase tracking-wider opacity-80">min</span>
            </div>
            <span className="opacity-50">•</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-serif">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="text-xs uppercase tracking-wider opacity-80">sec</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Option 2: Glass effect with stronger contrast
  if (variant === "glass") {
    return (
      <div className={transitionClass}>
        <div className="inline-block bg-white/15 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/40 shadow-lg">
          <div className="flex items-baseline gap-4 text-white text-sm md:text-base font-light">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl md:text-4xl font-serif font-semibold">{timeLeft.days}</span>
              <span className="text-xs uppercase tracking-widest opacity-90">days</span>
            </div>
            <span className="opacity-60 text-xl">•</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl md:text-4xl font-serif font-semibold">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-xs uppercase tracking-widest opacity-90">hours</span>
            </div>
            <span className="opacity-60 text-xl">•</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl md:text-4xl font-serif font-semibold">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-xs uppercase tracking-widest opacity-90">min</span>
            </div>
            <span className="opacity-60 text-xl">•</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl md:text-4xl font-serif font-semibold">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="text-xs uppercase tracking-widest opacity-90">sec</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Option 3: Bottom position (near scroll arrow)
  if (variant === "bottom") {
    return (
      <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 z-10 ${transitionClass}`}>
        <div className="bg-black/30 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/30">
          <div className="flex items-baseline gap-3 text-white text-xs md:text-sm font-light">
            <div className="flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-serif">{timeLeft.days}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-80">days</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-serif">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-80">hr</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-serif">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-80">min</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-serif">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-80">sec</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Option 4: Default (original minimal style)
  return (
    <div className={transitionClass}>
      <div className="inline-flex items-baseline gap-3 text-white/90 text-sm md:text-base font-light">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-serif">{timeLeft.days}</span>
          <span className="text-xs uppercase tracking-wider opacity-70">days</span>
        </div>
        <span className="opacity-40">•</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-serif">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="text-xs uppercase tracking-wider opacity-70">hours</span>
        </div>
        <span className="opacity-40">•</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-serif">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="text-xs uppercase tracking-wider opacity-70">min</span>
        </div>
        <span className="opacity-40">•</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-serif">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="text-xs uppercase tracking-wider opacity-70">sec</span>
        </div>
      </div>
    </div>
  )
}