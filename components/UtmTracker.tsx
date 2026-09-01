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
    if (params.get('source')?.toLowerCase() === 'chatgpt') {
      sessionStorage.setItem(CHATGPT_SOURCE_KEY, 'chatgpt')
    }
    if (sessionStorage.getItem(CHATGPT_SOURCE_KEY) === 'chatgpt') {
      document.cookie = `${CHATGPT_SOURCE_KEY}=chatgpt; path=/; SameSite=Lax`
    }
  }, [])

  return null
}
