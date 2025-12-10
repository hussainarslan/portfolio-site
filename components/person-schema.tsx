export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Hussain Arslan",
    alternateName: "MHA",
    url: "https://mhac.dev",
    jobTitle: "AI Architect & Software Engineer",
    description:
      "Accomplished AI architect and software engineer with 7+ years of experience building enterprise AI products, agentic systems, and workflow automation solutions.",
    knowsAbout: [
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
