declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number>
) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', eventName, params)
}

export const Analytics = {
  waitlistSignup: () => trackEvent('waitlist_signup'),
  partnerLead: () => trackEvent('partner_lead'),
  ctaClick: (label: string) => trackEvent('cta_click', { label }),
}
