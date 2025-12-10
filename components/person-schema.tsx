export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Hussain Arslan",
    alternateName: ["MHA", "Hussain Arslan", "Muhammad Hussain"],
    url: "https://mhac.dev",
    jobTitle: "AI Engineer & Software Architect",
    description:
      "Muhammad Hussain Arslan - AI Engineer & Architect with 7+ years of experience building enterprise AI products, agentic and workflow automation solutions.",
    knowsAbout: [
      "AI Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Full-Stack Development",
      "Workflow Automation",
      "Agentic Systems",
      "Enterprise AI Products",
    ],
    sameAs: [
      "https://github.com/mharslan",
      "https://linkedin.com/in/mharslan",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
