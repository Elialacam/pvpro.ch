'use client'
import { useEffect } from 'react'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'fbclid']
const CHATGPT_SOURCE_KEY = 'pvpro_source'

export default function UtmTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    UTM_KEYS.forEach(key => {
      const val = params.get(key)
      if (val) sessionStorage.setItem(key, val)
    })

    // Keep ChatGPT Ads attribution for the current browsing session.
    // The session cookie lets middleware carry it onto form-page navigations.
    const source = params.get('source')?.toLowerCase()
    const hasNewAttribution = Boolean(params.get('utm_source') || params.get('fbclid'))
    let cleanupAdScroll: (() => void) | undefined

    if (hasNewAttribution) {
      const previousScrollRestoration = window.history.scrollRestoration
      const previousScrollBehavior = document.documentElement.style.scrollBehavior
      let userInteracted = false

      const scrollToTop = () => {
        if (!userInteracted) window.scrollTo(0, 0)
      }
      const markUserInteraction = () => {
        userInteracted = true
      }

      window.history.scrollRestoration = 'manual'
      document.documentElement.style.scrollBehavior = 'auto'
      window.addEventListener('touchstart', markUserInteraction, { passive: true })
      window.addEventListener('wheel', markUserInteraction, { passive: true })
      scrollToTop()

      const frame = window.requestAnimationFrame(scrollToTop)
      const scrollTimer = window.setTimeout(scrollToTop, 100)
      const restoreTimer = window.setTimeout(() => {
        window.history.scrollRestoration = previousScrollRestoration
        document.documentElement.style.scrollBehavior = previousScrollBehavior
      }, 300)

      cleanupAdScroll = () => {
        window.cancelAnimationFrame(frame)
        window.clearTimeout(scrollTimer)
        window.clearTimeout(restoreTimer)
        window.removeEventListener('touchstart', markUserInteraction)
        window.removeEventListener('wheel', markUserInteraction)
        window.history.scrollRestoration = previousScrollRestoration
        document.documentElement.style.scrollBehavior = previousScrollBehavior
      }
    }

    if (source === 'chatgpt') {
      sessionStorage.setItem(CHATGPT_SOURCE_KEY, 'chatgpt')
    } else if (hasNewAttribution) {
      sessionStorage.removeItem(CHATGPT_SOURCE_KEY)
      document.cookie = `${CHATGPT_SOURCE_KEY}=; path=/; Max-Age=0; SameSite=Lax`
    }
    if (sessionStorage.getItem(CHATGPT_SOURCE_KEY) === 'chatgpt') {
      document.cookie = `${CHATGPT_SOURCE_KEY}=chatgpt; path=/; SameSite=Lax`
    }

    return cleanupAdScroll
  }, [])

  return null
}
