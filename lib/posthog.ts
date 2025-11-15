import posthog from 'posthog-js'

export function initPostHog() {
  if (typeof window !== 'undefined') {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (!posthogKey || !posthogHost) {
      console.warn('PostHog environment variables not configured')
      return
    }

    posthog.init(posthogKey, {
      api_host: posthogHost,
      person_profiles: 'identified_only', // Only create profiles for identified users
      capture_pageview: false, // We'll capture pageviews manually in the provider
      capture_pageleave: true,
      autocapture: false, // Disable automatic event capture for more control
      disable_session_recording: false, // Enable session recording if needed
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('PostHog initialized')
        }
      },
    })
  }

  return posthog
}
