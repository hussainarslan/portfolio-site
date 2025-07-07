"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#history", label: "History" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Update the nav background and styling */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-panchang font-bold text-xl magnetic-hover" style={{ color: "#FFFFE3" }}>
            MHA
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="magnetic-hover p-2 hover:bg-gray-800 rounded-full transition-colors"
            style={{ color: "#FFFFE3" }}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile/Desktop Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Update the menu overlay */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md shadow-2xl transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#161614", borderLeft: "1px solid #3A3A36" }}
        >
          <div className="p-6">
            <div className="flex justify-end items-center mb-12">
              <button
                onClick={() => setIsOpen(false)}
                className="magnetic-hover p-2 hover:bg-gray-800 rounded-full transition-colors"
                style={{ color: "#FFFFE3" }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-panchang font-bold transition-colors magnetic-hover"
                  style={{ color: "#FFFFE3", animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="caption mb-4" style={{ color: "#B8B8A3" }}>
                Connect
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:m.hussain.arslan@gmail.com"
                  className="block body-regular transition-colors magnetic-hover"
                  style={{ color: "#B8B8A3" }}
                >
                  m.hussain.arslan@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/hussainarslan"
                  className="block body-regular transition-colors magnetic-hover"
                  style={{ color: "#B8B8A3" }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/hussainarslan"
                  className="block body-regular transition-colors magnetic-hover"
                  style={{ color: "#B8B8A3" }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
