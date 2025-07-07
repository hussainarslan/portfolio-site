"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // You would typically send this to your backend or email service
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: "#2A2A26" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-header mb-4">Let's Work Together</h2>
          <p className="body-large max-w-2xl mx-auto">
            Have a project in mind or just want to chat about AI and development? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="border border-card p-8 rounded-lg hover:border-card-hover transition-all">
            <h3 className="font-mona-sans font-bold text-2xl mb-6 text-primary">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mona-sans font-medium mb-2 text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:border-transparent transition-all font-mona-sans"
                  style={{
                    backgroundColor: "#FFFFE3",
                    color: "#161614",
                    focusRingColor: "#FFFFE3",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mona-sans font-medium mb-2 text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:border-transparent transition-all font-mona-sans"
                  style={{
                    backgroundColor: "#FFFFE3",
                    color: "#161614",
                    focusRingColor: "#FFFFE3",
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mona-sans font-medium mb-2 text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:border-transparent transition-all font-mona-sans resize-none"
                  style={{
                    backgroundColor: "#FFFFE3",
                    color: "#161614",
                    focusRingColor: "#FFFFE3",
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg transition-colors font-mona-sans font-medium disabled:opacity-50 disabled:cursor-not-allowed magnetic-hover"
                style={{ backgroundColor: "#FFFFE3", color: "#161614" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <div>
              <h3 className="font-mona-sans font-bold text-2xl mb-6 text-primary">Quick Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:m.hussain.arslan@gmail.com"
                  className="flex items-center gap-4 p-4 border border-card rounded-lg hover:border-card-hover transition-all magnetic-hover"
                >
                  <Mail className="text-blue-400" size={24} style={{ color: "#FFFFE3" }} />
                  <div>
                    <div className="font-mona-sans font-medium" style={{ color: "#FFFFE3" }}>
                      Email
                    </div>
                    <div className="caption" style={{ color: "#B8B8A3" }}>
                      m.hussain.arslan@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/hussainarslan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-card rounded-lg hover:border-card-hover transition-all magnetic-hover"
                >
                  <Linkedin className="text-blue-400" size={24} style={{ color: "#FFFFE3" }} />
                  <div>
                    <div className="font-mona-sans font-medium" style={{ color: "#FFFFE3" }}>
                      LinkedIn
                    </div>
                    <div className="caption" style={{ color: "#B8B8A3" }}>
                      linkedin.com/in/hussainarslan
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/hussainarslan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-card rounded-lg hover:border-card-hover transition-all magnetic-hover"
                >
                  <Github className="text-blue-400" size={24} style={{ color: "#FFFFE3" }} />
                  <div>
                    <div className="font-mona-sans font-medium" style={{ color: "#FFFFE3" }}>
                      GitHub
                    </div>
                    <div className="caption" style={{ color: "#B8B8A3" }}>
                      github.com/hussainarslan
                    </div>
                  </div>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-card rounded-lg hover:border-card-hover transition-all magnetic-hover"
                >
                  <Twitter className="text-blue-400" size={24} style={{ color: "#FFFFE3" }} />
                  <div>
                    <div className="font-mona-sans font-medium" style={{ color: "#FFFFE3" }}>
                      Twitter
                    </div>
                    <div className="caption" style={{ color: "#B8B8A3" }}>
                      Thoughts and updates
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="border border-card p-6 rounded-lg hover:border-card-hover transition-all">
              <h4 className="font-mona-sans font-bold text-lg mb-3 text-primary">Currently Available</h4>
              <p className="body-regular mb-4">
                Building the next generation of AI agent marketplaces. Open to discussing innovative AI projects and
                consulting opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="caption text-secondary">Available for AI consulting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
