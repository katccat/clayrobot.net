import styles from '../styles/cascade-text.module.css'

// Fades in each word of `text` in cascading order.
// Use "\n" inside `text` to force a line break.
// All words are rendered upfront; only their visibility is animated.
export default function CascadeText({
  text,
  className = '',
  stagger = 0.16, // seconds between each word
  delay = 0, // seconds before the first word starts
  duration = 0.8, // seconds per word fade
  ...rest
}) {
  const lines = String(text).split('\n')
  let wordIndex = 0

  return (
    <span className={`${styles.cascade} ${className}`.trim()} {...rest}>
      {lines.map((line, li) => (
        <span className={styles.line} key={li}>
          {/* keep the capturing split so whitespace between words is preserved */}
          {line.split(/(\s+)/).map((token, ti) => {
            if (token === '' || /^\s+$/.test(token)) return token
            const i = wordIndex++
            return (
              <span
                key={ti}
                className={styles.word}
                style={{
                  animationDelay: `${delay + i * stagger}s`,
                  animationDuration: `${duration}s`,
                }}
              >
                {token}
              </span>
            )
          })}
        </span>
      ))}
    </span>
  )
}
