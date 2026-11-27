import { useEffect, useState } from 'react'

export function useScrollSpy(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    if (!('IntersectionObserver' in window)) {
      const onScroll = () => {
        const mark = window.scrollY + window.innerHeight * 0.35
        let current = ''
        sections.forEach((section) => {
          if (section.offsetTop <= mark) current = section.id
        })
        setActive(current)
      }
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }

    const visible = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top)
          else visible.delete(entry.target.id)
        })
        if (!visible.size) return
        const next = [...visible.entries()].sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]))[0][0]
        setActive(next)
      },
      { rootMargin: '-34% 0px -54% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}
