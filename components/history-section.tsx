"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    year: "Feb 2025 - Present",
    role: "Senior AI Engineer",
    company: "Portus (portusai.co)",
    description:
      "Driving engineering for stealth-stage AI company pioneering the world's first agent-to-agent marketplace, democratising workflow automation for non-technical users to reclaim 15-25 hours weekly through intelligent task delegation.",
    skills: ["A2A Protocols", "Multi-Agent Systems", "Graph Neural Networks", "LLMs", "Real-time API Delegation"],
    achievements: [
      "Architecting distributed orchestration layer with 200+ AI agents",
      "Built agent interoperability framework with advanced graph neural networks",
      "Eliminated 40+ hours of manual work per user monthly",
    ],
  },
  {
    year: "Jan 2025 - May 2025",
    role: "Technical Lead (AI Agent Architect)",
    company: "Entropy and Co.",
    description:
      "Led end-to-end development of enterprise AI workflows for SEO, lead gen, and document intelligence - deployed across 40+ global clients with 96% customer satisfaction rate.",
    skills: ["LangGraph", "OCR", "Multi-Agent Orchestration", "GPT Agents", "Workflow Automation"],
    achievements: [
      "96% customer satisfaction rate across 40+ global clients",
      "75% reduction in customer response time",
      "$2.1M annual cost savings across B2B SaaS and EdTech",
      "85% reduction in manual document processing",
      "Plug and Play GOAL Fellow representing Pakistan in Silicon Valley",
    ],
  },
  {
    year: "Sept 2023 - May 2025",
    role: "Software Engineer (Applied AI & Automation)",
    company: "Folio3",
    description:
      "Contributed to 4 flagship products deployed across 8 leading US insurers and logistics firms, delivering cumulative savings of $6.7M in operational inefficiencies and revenue recovery.",
    skills: ["AWS", "Docker", "OCR", "NLP", "Enterprise AI", "Revenue Analytics"],
    achievements: [
      "$6.7M in revenue leakage recovery for major US insurance client",
      "Processed 2.3M+ documents with 80% reduction in human QA workload",
      "94% accuracy rate in policy compliance analysis",
      "99.7% system uptime scaling from 10K to 1.2M data points per week",
      "90% reduction in manual reporting time",
    ],
  },
  {
    year: "Apr 2017 - Aug 2023",
    role: "Lead Software Engineer (Full-Stack & AI Solutions)",
    company: "WebNoodle",
    description:
      "Led development of 4 cross-platform mobile apps using React Native for U.S.-based startups in healthcare, edtech, wellness, and productivity.",
    skills: ["React Native", "MERN Stack", "AI Agents", "OCR", "CI/CD", "Mentoring"],
    achievements: [
      "Built AI agents for behavioral tracking in edtech platforms",
      "Created warranty data parsers for 10K+ SKUs",
      "Implemented 1,000+ test cases and CI/CD pipelines",
      "Mentored juniors across 15+ client accounts",
      "Built Python-based automation agents for workflow optimization",
    ],
  },
]

export default function HistorySection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index])
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="history" className="py-24 px-6" style={{ backgroundColor: "#2A2A26" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="section-header mb-4">My Journey</h2>
          <p className="body-large">
            A timeline of my professional growth in AI architecture and software engineering, from full-stack
            development to pioneering agent-to-agent marketplace solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative pl-20 transition-all duration-800 ${
                  visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 transition-colors duration-500 ${
                    visibleItems.includes(index) ? "border-gray-800" : "border-gray-800"
                  }`}
                  style={{ backgroundColor: visibleItems.includes(index) ? "#FFFFE3" : "#6B7280" }}
                />

                <div className="border border-card p-6 rounded-lg hover:border-card-hover transition-all magnetic-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="font-thorsa font-bold text-xl" style={{ color: "#FFFFE3" }}>
                      {exp.role}
                    </h3>
                    <span className="caption mt-1 sm:mt-0" style={{ color: "#B8B8A3" }}>
                      {exp.year}
                    </span>
                  </div>

                  <p className="font-mona-sans font-medium mb-3" style={{ color: "#FFFFE3" }}>
                    {exp.company}
                  </p>
                  <p className="body-regular mb-4" style={{ color: "#B8B8A3" }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="caption px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#FFFFE3", color: "#161614" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 rounded-lg transition-colors magnetic-hover font-mona-sans font-medium"
            style={{ backgroundColor: "#FFFFE3", color: "#161614" }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
