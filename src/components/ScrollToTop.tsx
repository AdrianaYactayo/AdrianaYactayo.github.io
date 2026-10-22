import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth'

    if (hash && hash !== '#inicio') {
      const id = decodeURIComponent(hash.slice(1))
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior, block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: hash ? behavior : 'auto' })
  }, [pathname, hash])

  return null
}
