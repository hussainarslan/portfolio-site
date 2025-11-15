import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { PostHogProvider } from "@/components/providers/posthog-provider"

// Load custom fonts
const panchang = localFont({
  src: [
    {
      path: "../fonts/Panchang-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Panchang-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Panchang-Bold.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-panchang",
  display: "swap",
})

const monaSans = localFont({
  src: [
    {
      path: "../fonts/MonaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/MonaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MonaSans-Medium.ttf",
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
    "Accomplished AI architect and software engineer with 7+ years of experience building enterprise AI products, agentic systems, and workflow automation solutions."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${panchang.variable} ${monaSans.variable}`}>
      <body className="font-mona-sans antialiased" style={{ backgroundColor: "#161614", color: "#FFFFE3" }}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}
