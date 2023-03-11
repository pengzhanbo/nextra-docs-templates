import type { ReactNode } from 'react'
import styles from './index.module.css'

export function Hero({
  name = '',
  tagline = '',
  text = '',
}: HeroProps) {
  return (
  <div className={styles.heroContainer}>
    { name ? <h2 className={styles.heroName}>{ name }</h2> : '' }
    { tagline ? <p className={styles.heroTagline}>{ tagline }</p> : '' }
    { text ? <p className={styles.heroText}>{ text }</p> : '' }
  </div>
  )
}
export interface HeroProps {
  name: string | ReactNode
  tagline?: string | ReactNode
  text?: string | ReactNode
}
