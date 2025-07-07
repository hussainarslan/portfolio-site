import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import WorkSection from "@/components/work-section"
import SkillsSection from "@/components/skills-section"
import HistorySection from "@/components/history-section"
import CertificationsSection from "@/components/certifications-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <SkillsSection />
      <HistorySection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="caption text-secondary">
            © {new Date().getFullYear()} Muhammad Hussain Arslan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://linktr.ee/hussainarslan"
              target="_blank"
              rel="noopener noreferrer"
              className="caption text-secondary hover:text-primary transition-colors"
            >
              Links
            </a>
            <a href="tel:+923212955555" className="caption text-secondary hover:text-primary transition-colors">
              +92 321 2955555
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
