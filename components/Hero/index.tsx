import type { ReactNode } from 'react'
import styles from './index.module.css'

export function Hero({
  name = '',
  tagline = '',
  text = '',
}: HeroProps) {
  return (
  <div className={styles.heroContainer}>
    { name ? <h2 className={styles.heroName}>{ name }</h2> : null }
    { tagline ? <p className={styles.heroTagline}>{ tagline }</p> : null }
    { text ? <p className={styles.heroText}>{ text }</p> : null }
  </div>
  )
}
export interface HeroProps {
  name: string | ReactNode
  tagline?: string | ReactNode
  text?: string | ReactNode
}
