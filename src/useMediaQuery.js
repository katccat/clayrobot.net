import { useEffect, useState } from 'react'

// Tracks whether a CSS media query currently matches, updating on change.
// Lets components render only the markup for the active breakpoint instead of
// rendering both and hiding one with CSS (which still downloads both images).
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}
