
import Link from 'next/link'
import cn from 'clsx'

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

export function Actions({ children }) {
  return <div className={styles.heroActions}>
      { children }
    </div>
}

export function Action({ link, type = 'alt', text = '' }: HeroActionProps) {
  return link
    ? (<Link
        className={cn(styles.cta, type === 'alt' ? styles.alt : styles.brand)}
        href={link}
      >{ text }<span>→</span></Link>)
    : <span className={cn(styles.cta, styles.alt)}>{ text }</span>
}


export interface HeroProps {
  name: string
  tagline?: string
  text?: string
}

export interface HeroActionProps {
  text: string
  link?: string
  type?: 'brand' | 'alt'
}
