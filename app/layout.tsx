import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

// Load custom fonts
const panchang = localFont({
  src: [
    {
      path: "./fonts/panchang-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/panchang-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/panchang-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-panchang",
  display: "swap",
})

const thorsa = localFont({
  src: [
    {
      path: "./fonts/thorsa-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/thorsa-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-thorsa",
  display: "swap",
})

const monaSans = localFont({
  src: [
    {
      path: "./fonts/mona-sans-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/mona-sans-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/mona-sans-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Muhammad Hussain Arslan - AI Architect & Software Engineer",
  description:
    "Accomplished AI architect and software engineer with 7+ years of experience building enterprise AI products, agentic systems, and workflow automation solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${panchang.variable} ${thorsa.variable} ${monaSans.variable}`}>
      <body className="font-mona-sans antialiased" style={{ backgroundColor: "#161614", color: "#FFFFE3" }}>
        {children}
      </body>
    </html>
  )
}
