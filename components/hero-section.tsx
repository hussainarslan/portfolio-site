// Helper to create character spans with staggered animation delays
function renderChars(text: string, startIndex: number = 0) {
  return text.split("").map((char, i) => (
    <span key={i} style={{ animationDelay: `${(startIndex + i) * 0.05}s` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ))
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="hero-title mb-6 text-center leading-tight" style={{ color: "#FFFFE3" }}>
          <span className="block mb-2 text-reveal">
            {renderChars("Muhammad Hussain", 0)}
          </span>
          <span className="block text-reveal">
            {renderChars("Arslan", 17)}
          </span>
        </h1>
        <p
          className="position-title mb-12 subtitle-reveal text-balance"
          style={{ color: "#B8B8A3" }}
        >
          AI Engineer & Software Architect
        </p>

        <div className="flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
