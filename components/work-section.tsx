"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Marketplace A2A Router",
    category: "AI Architecture",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Foundational architecture for autonomous agents to call and collaborate on business tasks using a shared protocol.",
    tags: ["LangGraph", "Multi-Agent Systems", "A2A Protocol", "Neural Routing"],
    year: "2025",
    impact: "Enabling seamless orchestration between 200+ AI agents",
  },
  {
    id: 2,
    title: "MedClaim OCR Agent",
    category: "Healthcare AI",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Medical intake pipeline automating diagnosis document parsing, used by 3 hospital networks in South Asia.",
    tags: ["OCR", "NLP", "Healthcare", "Document Processing"],
    year: "2025",
    impact: "Deployed across 3 hospital networks",
  },
  {
    id: 3,
    title: "Blindspot Finder",
    category: "InsurTech AI",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Scraper and inference agent to detect underinsured merchants, generating $4.1M in policy opportunities.",
    tags: ["Web Scraping", "AI Inference", "Insurance", "Revenue Recovery"],
    year: "2024",
    impact: "$4.1M in policy opportunities generated",
  },
  {
    id: 4,
    title: "EdTrack SEO Agent",
    category: "EdTech AI",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "SEO + content agent with RAG-powered lesson summarization and scheduling, boosting blog traffic by 3.5x.",
    tags: ["RAG", "SEO Automation", "Content Generation", "EdTech"],
    year: "2024",
    impact: "3.5x increase in blog traffic",
  },
  {
    id: 5,
    title: "Compliance Parser",
    category: "LegalTech AI",
    image: "/placeholder.svg?height=400&width=600",
    description: "OCR + validation engine for legal firms — reduced case intake overhead by 60%.",
    tags: ["OCR", "Legal Tech", "Document Validation", "Process Automation"],
    year: "2023",
    impact: "60% reduction in case intake overhead",
  },
]

export default function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="section-header mb-4">Featured Work</h2>
          <p className="body-large max-w-2xl">
            A selection of AI-powered solutions that showcase my expertise in building enterprise-grade automation
            systems, from agentic workflows to document intelligence platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group block"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-[4/3] mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredProject === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-20" : "opacity-0"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-mona-sans font-bold text-xl transition-colors" style={{ color: "#FFFFE3" }}>
                    {project.title}
                  </h3>
                  <span className="caption" style={{ color: "#B8B8A3" }}>
                    {project.category}
                  </span>
                </div>
                <p className="body-regular line-clamp-2" style={{ color: "#B8B8A3" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="caption px-3 py-1 rounded-full" style={{ backgroundColor: "#FFFFE3", color: "#161614" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
