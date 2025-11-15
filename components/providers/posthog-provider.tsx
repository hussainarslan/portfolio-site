'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { initPostHog } from '@/lib/posthog'

function displayWelcomeMessage() {
  const asciiArt = `
███████╗ ██████╗ ██████╗     ████████╗██╗  ██╗███████╗
██╔════╝██╔═══██╗██╔══██╗    ╚══██╔══╝██║  ██║██╔════╝
█████╗  ██║   ██║██████╔╝       ██║   ███████║█████╗
██╔══╝  ██║   ██║██╔══██╗       ██║   ██╔══██║██╔══╝
██║     ╚██████╔╝██║  ██║       ██║   ██║  ██║███████╗
╚═╝      ╚═════╝ ╚═╝  ╚═╝       ╚═╝   ╚═╝  ╚═╝╚══════╝

██╗      ██████╗ ██╗   ██╗███████╗     ██████╗ ███████╗
██║     ██╔═══██╗██║   ██║██╔════╝    ██╔═══██╗██╔════╝
██║     ██║   ██║██║   ██║█████╗      ██║   ██║█████╗
██║     ██║   ██║╚██╗ ██╔╝██╔══╝      ██║   ██║██╔══╝
███████╗╚██████╔╝ ╚████╔╝ ███████╗    ╚██████╔╝██║
╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝     ╚═════╝ ╚═╝

████████╗██╗  ██╗███████╗     ██████╗  █████╗ ███╗   ███╗███████╗
╚══██╔══╝██║  ██║██╔════╝    ██╔════╝ ██╔══██╗████╗ ████║██╔════╝
   ██║   ███████║█████╗      ██║  ███╗███████║██╔████╔██║█████╗
   ██║   ██╔══██║██╔══╝      ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝
   ██║   ██║  ██║███████╗    ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
`

  console.log(asciiArt)
}

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track pageviews on route changes
    if (pathname && typeof window !== 'undefined') {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Display welcome message
    displayWelcomeMessage()

    // Initialize PostHog on mount
    initPostHog()
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  )
}
