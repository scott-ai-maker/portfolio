'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    plausible?: (eventName: string, options?: Record<string, unknown>) => void
    dataLayer?: unknown[]
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      const trackedElement = target?.closest<HTMLElement>('[data-analytics-event]')

      if (!trackedElement) {
        return
      }

      const eventName =
        trackedElement.dataset.analyticsEvent ?? 'outbound_click'
      const label =
        trackedElement.dataset.analyticsLabel ??
        trackedElement.getAttribute('aria-label') ??
        trackedElement.textContent?.trim() ??
        'link'
      const href = trackedElement.getAttribute('href') ?? ''

      window.gtag?.('event', eventName, {
        event_category: 'engagement',
        event_label: label,
        value: href,
      })

      window.dataLayer?.push?.({
        event: eventName,
        event_label: label,
        href,
      })

      window.plausible?.(eventName, {
        props: {
          label,
          href,
        },
      })
    }

    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [])

  return null
}
