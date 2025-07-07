import { Award, MapPin, Trophy, Users } from "lucide-react"

const certifications = [
  {
    title: "Plug & Play GOAL Program Fellow",
    organization: "Silicon Valley",
    year: "2025",
    description: "Representing Pakistan at Silicon Valley's premier global accelerator for AI innovation",
    icon: Trophy,
    color: "text-yellow-600",
  },
  {
    title: "Certified LangChain + LangGraph Workflow Developer",
    organization: "LangChain",
    year: "2024",
    description: "Advanced certification in building complex AI agent workflows and orchestration systems",
    icon: Award,
    color: "text-blue-600",
  },
  {
    title: "National Incubation Center Lahore Finalist",
    organization: "Innovation Track",
    year: "2024",
    description: "Finalist in the innovation track for AI-powered business solutions",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    year: "In Progress",
    description: "Cloud computing fundamentals and AWS services certification",
    icon: MapPin,
    color: "text-orange-600",
  },
]

export default function CertificationsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-header mb-4" style={{ color: "#FFFFE3" }}>
            Certifications & Recognition
          </h2>
          <p className="body-large max-w-2xl mx-auto" style={{ color: "#B8B8A3" }}>
            Professional certifications and recognition from leading organizations in AI and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div
                key={index}
                className="border border-card p-6 rounded-lg hover:border-card-hover transition-all magnetic-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gray-800 ${cert.color}`}>
                    <IconComponent size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-mona-sans font-bold text-lg" style={{ color: "#FFFFE3" }}>
                        {cert.title}
                      </h3>
                      <span className="caption" style={{ color: "#B8B8A3" }}>
                        {cert.year}
                      </span>
                    </div>

                    <p className="font-mona-sans font-medium mb-2" style={{ color: "#FFFFE3" }}>
                      {cert.organization}
                    </p>
                    <p className="body-regular" style={{ color: "#B8B8A3" }}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
