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
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <p className="caption text-secondary">
            © {new Date().getFullYear()} Muhammad Hussain Arslan. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
