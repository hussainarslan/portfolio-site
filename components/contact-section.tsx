"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import posthog from "posthog-js"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactSection() {
  const FORMSPARK_ACTION_URL = "https://submit-form.com/EPSdyzan3"
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage("")

    posthog.capture('contact_form_submit', {
      name: data.name,
      email: data.email,
      message_length: data.message.length
    })

    try {
      const response = await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      })

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent.")
        reset()
      } else {
        setSubmitMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.")
      console.error("Form submission error:", error)
    }

    setIsSubmitting(false)
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label htmlFor="name" className="block font-mona-sans font-medium mb-2 text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all font-mona-sans ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  }`}
                  style={{
                    backgroundColor: "#FFFFE3",
                    color: "#161614",
                    focusRingColor: "#FFFFE3",
                  }}
                  placeholder="Your name"
                />
                <p className={`mt-1 text-sm text-red-400 h-5 ${errors.name ? 'visible' : 'invisible'}`}>
                  {errors.name?.message || ' '}
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block font-mona-sans font-medium mb-2 text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  noValidate
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all font-mona-sans ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  }`}
                  style={{
                    backgroundColor: "#FFFFE3",
                    color: "#161614",
                    focusRingColor: "#FFFFE3",
                  }}
                  placeholder="your@email.com"
                />
                <p className={`mt-1 text-sm text-red-400 h-5 ${errors.email ? 'visible' : 'invisible'}`}>
                  {errors.email?.message || ' '}
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block font-mona-sans font-medium mb-2 text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all font-mona-sans resize-none ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  }`}
                  style={{
                    backgroundColor: "#FFFFE3",
                    color: "#161614",
                    focusRingColor: "#FFFFE3",
                  }}
                  placeholder="Tell me about your project..."
                />
                <p className={`mt-1 text-sm text-red-400 h-5 ${errors.message ? 'visible' : 'invisible'}`}>
                  {errors.message?.message || ' '}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full py-3 px-6 rounded-lg transition-colors font-mona-sans font-medium disabled:opacity-50 disabled:cursor-not-allowed magnetic-hover"
                style={{ backgroundColor: "#FFFFE3", color: "#161614" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center font-mona-sans ${
                    submitMessage.includes("Thank you") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
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
                  onClick={() => posthog.capture('connect_button_click', { type: 'email' })}
                >
                  <Mail className="text-blue-400" size={24} style={{ color: "#FFFFE3" }} />
                  <div>
                    <div className="font-mona-sans font-medium" style={{ color: "#FFFFE3" }}>
                      Email
                    </div>
                    <div className="caption" style={{ color: "#B8B8A3" }}>
                      Send me an email
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/hussainarslan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-card rounded-lg hover:border-card-hover transition-all magnetic-hover"
                  onClick={() => posthog.capture('connect_button_click', { type: 'linkedin' })}
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
                  onClick={() => posthog.capture('connect_button_click', { type: 'github' })}
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
                  href="https://x.com/mhussainarslan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-card rounded-lg hover:border-card-hover transition-all magnetic-hover"
                  onClick={() => posthog.capture('connect_button_click', { type: 'twitter' })}
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
