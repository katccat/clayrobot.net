import { useEffect, useState } from 'react'

const ROWS = 6
const STAGGER = 100
const DURATION = 2000

// Brief intro overlay: stacked rows of the wordmark drift downward, then clear.
export default function Splash() {
  const [active, setActive] = useState(() => {
    if (typeof window === 'undefined') return true
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !reduced
  })
  const [leaving, setLeaving] = useState(false)
  const [revealedCount, setRevealedCount] = useState(0)

  useEffect(() => {
    if (!active) return undefined
    document.body.style.overflow = 'hidden'

    const timers = [
      ...Array.from({ length: ROWS }, (_, i) =>
        window.setTimeout(() => setRevealedCount(i + 1), i * STAGGER)
      ),
      window.setTimeout(() => setLeaving(true), DURATION - 500),
      window.setTimeout(() => setActive(false), DURATION),
    ]

    return () => {
      document.body.style.overflow = ''
      timers.forEach(window.clearTimeout)
    }
  }, [active])

  if (!active) return null

  return (
    <div
      className={`splash${leaving ? ' splash--leaving' : ''}`}
      role="presentation"
      onClick={() => setLeaving(true)}
    >
      <div className="splash__reel">
        {Array.from({ length: ROWS }, (_, i) => (
          <span
            className={`splash__row${i < revealedCount ? ' splash__row--visible' : ''}`}
            key={i}
            aria-hidden={i !== 0}
          >
            {i % 2 == 0 ? '200' : 'OK'}
          </span>
        ))}
      </div>
    </div>
  )
}
