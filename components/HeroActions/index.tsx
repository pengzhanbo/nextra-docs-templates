import Link from 'next/link'
import cn from 'clsx'

import styles from './index.module.css'
import type { ReactNode } from 'react'

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

export interface HeroActionProps {
  text: string | ReactNode
  link?: string
  type?: 'brand' | 'alt'
}
