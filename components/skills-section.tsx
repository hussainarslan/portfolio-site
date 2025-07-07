"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "LangChain & LangGraph", level: 95 },
      { name: "Multi-Agent Systems", level: 90 },
      { name: "OCR & Computer Vision", level: 88 },
      { name: "RAG (Retrieval-Augmented Generation)", level: 85 },
      { name: "NLP & Document Intelligence", level: 92 },
    ],
  },
  {
    category: "Backend & Cloud",
    skills: [
      { name: "AWS (EC2, Lambda, S3, SQS)", level: 85 },
      { name: "Docker & CI/CD", level: 88 },
      { name: "PostgreSQL & Redis", level: 82 },
      { name: "Django & Node.js", level: 90 },
      { name: "n8n Workflow Automation", level: 85 },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React & Next.js", level: 92 },
      { name: "React Native", level: 88 },
      { name: "MERN Stack", level: 90 },
      { name: "Supabase", level: 80 },
      { name: "TypeScript", level: 85 },
    ],
  },
]

export default function SkillsSection() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([])
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = skillRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const skillId = `skill-${index}`
            setVisibleSkills((prev) => [...prev, skillId])
          }
        },
        { threshold: 0.5 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#2A2A26" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-header mb-4">Technical Expertise</h2>
          <p className="body-large max-w-2xl mx-auto">
            7+ years of experience across AI architecture, full-stack development, and enterprise automation solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="border border-card p-6 rounded-lg hover:border-card-hover transition-all"
            >
              <h3 className="font-mona-sans font-bold text-xl mb-6 text-center text-primary">{category.category}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 5 + skillIndex
                  const skillId = `skill-${globalIndex}`
                  const isVisible = visibleSkills.includes(skillId)

                  return (
                    <div key={skill.name} ref={(el) => (skillRefs.current[globalIndex] = el)} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mona-sans font-medium text-sm text-primary">{skill.name}</span>
                        <span className="caption text-secondary">{skill.level}%</span>
                      </div>

                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: "#FFFFE3",
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border border-card rounded-lg hover:border-card-hover transition-all">
            <div className="text-center">
              <div className="font-panchang font-bold text-2xl sm:text-3xl" style={{ color: "#FFFFE3" }}>
                7+
              </div>
              <div className="caption text-xs sm:text-sm" style={{ color: "#B8B8A3" }}>
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="font-panchang font-bold text-2xl sm:text-3xl" style={{ color: "#FFFFE3" }}>
                $6.7M
              </div>
              <div className="caption text-xs sm:text-sm" style={{ color: "#B8B8A3" }}>
                Revenue Recovered
              </div>
            </div>
            <div className="text-center">
              <div className="font-panchang font-bold text-2xl sm:text-3xl" style={{ color: "#FFFFE3" }}>
                40+
              </div>
              <div className="caption text-xs sm:text-sm" style={{ color: "#B8B8A3" }}>
                Global Clients
              </div>
            </div>
            <div className="text-center">
              <div className="font-panchang font-bold text-2xl sm:text-3xl" style={{ color: "#FFFFE3" }}>
                96%
              </div>
              <div className="caption text-xs sm:text-sm" style={{ color: "#B8B8A3" }}>
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
