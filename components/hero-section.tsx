"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const firstLineRef = useRef<HTMLSpanElement>(null)
  const secondLineRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const firstLine = firstLineRef.current
    const secondLine = secondLineRef.current
    const subtitle = subtitleRef.current

    if (firstLine) {
      const chars = "Muhammad Hussain".split("")
      firstLine.innerHTML = chars
        .map((char, i) => `<span style="animation-delay: ${i * 0.05}s">${char === " " ? "&nbsp;" : char}</span>`)
        .join("")
      firstLine.classList.add("text-reveal")
    }

    if (secondLine) {
      const chars = "Arslan".split("")
      secondLine.innerHTML = chars
        .map((char, i) => `<span style="animation-delay: ${(i + 17) * 0.05}s">${char === " " ? "&nbsp;" : char}</span>`)
        .join("")
      secondLine.classList.add("text-reveal")
    }

    if (subtitle) {
      setTimeout(() => {
        subtitle.style.opacity = "1"
        subtitle.style.transform = "translateY(0)"
      }, 1200)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="hero-title mb-6 text-center leading-tight" style={{ color: "#FFFFE3" }}>
          <span ref={firstLineRef} className="block mb-2">
            Muhammad Hussain
          </span>
          <span ref={secondLineRef} className="block">
            Arslan
          </span>
        </h1>
        <p
          ref={subtitleRef}
          className="position-title mb-12 opacity-0 transform translate-y-4 transition-all duration-800 text-balance"
          style={{ color: "#B8B8A3" }}
        >
          AI Architect & Software Engineer
        </p>

        <div className="flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
