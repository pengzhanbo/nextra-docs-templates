import type { ReactNode } from 'react'
import styles from './index.module.css'

export function Features({ children }) {
  return <div className={styles.container}>
    <div className={styles.content}>
      { children }
    </div>
  </div>
}

export function Feature({ icon, title, details }: FeatureProps) {
  return <div className={styles.feature}>
    <div className={styles.content}>
      { icon ? <div className={styles.icon}>{icon}</div> : null }
      <h2 className={styles.title}>{ title }</h2>
      <p className={styles.details}>{ details }</p>
    </div>
  </div>
}

export interface FeatureProps {
  icon?: string | ReactNode
  title: string | ReactNode
  details?: string | ReactNode
}
