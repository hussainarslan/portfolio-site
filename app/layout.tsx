import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { PostHogProvider } from "@/components/providers/posthog-provider"
import { GoogleAnalyticsProvider } from "@/components/providers/google-analytics-provider"
import { PersonSchema } from "@/components/person-schema"

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
      path: "../fonts/MonaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MonaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mhac.dev"),
  alternates: {
    canonical: "/",
  },
  title: "Muhammad Hussain Arslan - AI Architect & Software Engineer",
  description:
    "Accomplished AI architect and software engineer with 7+ years of experience building enterprise AI products, agentic systems, and workflow automation solutions.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Muhammad Hussain Arslan - AI Architect & Software Engineer",
    description:
      "Accomplished AI architect and software engineer with 7+ years of experience building enterprise AI products, agentic systems, and workflow automation solutions.",
    url: "https://mhac.dev",
    siteName: "Muhammad Hussain Arslan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Hussain Arslan - AI Architect & Software Engineer",
    description:
      "Accomplished AI architect and software engineer with 7+ years of experience building enterprise AI products, agentic systems, and workflow automation solutions.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${panchang.variable} ${monaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <PersonSchema />
        <GoogleAnalyticsProvider />
      </head>
      <body className="font-mona-sans antialiased" style={{ backgroundColor: "#161614", color: "#FFFFE3" }}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}
