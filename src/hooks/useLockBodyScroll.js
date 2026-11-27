import { useEffect } from 'react'

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined
    document.body.classList.add('is-locked')
    return () => document.body.classList.remove('is-locked')
  }, [locked])
}
