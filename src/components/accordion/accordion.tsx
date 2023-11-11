import React, { useState } from 'react'
import styles from './accordion.module.scss'
import { AccordionProps } from './accordion.type'
import { classList } from '@/util/classList'

export const Accordion = ({
  closeText,
  openText,
  body,
  initallyExpanded,
  id,
  additionalClassName = ''
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(initallyExpanded)

  return (
    <div className={classList([styles.root, additionalClassName])}>
      <button
        id={`accordionid${id}`}
        aria-expanded={isExpanded}
        aria-controls={`sect${id}`}
        type="button"
        className={styles.toggle}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className={styles['toggle-text']}>
          {isExpanded ? closeText : openText}
        </span>
        <svg
          className={classList([
            styles['toggle-icon'],
            isExpanded ? styles.open : styles.close
          ])}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7 10"
        >
          <path d="M6.21217 4.71218C6.21217 4.48733 6.09975 4.26249 5.98733 4.15007L2.27739 0.44013C1.94012 0.102863 1.37801 0.102863 1.04074 0.44013C0.703477 0.777397 0.703477 1.33951 1.04074 1.67678L4.07615 4.71218L1.04074 7.74758C0.703477 8.08485 0.703477 8.64696 1.04074 8.98423C1.37801 9.3215 1.94012 9.3215 2.27739 8.98423L5.87491 5.38671C6.09975 5.16187 6.21217 4.93702 6.21217 4.71218Z" />
        </svg>
      </button>
      {isExpanded && (
        <div
          id={`sect${id}`}
          aria-labelledby={`accordionid${id}`}
          role="region"
          className={styles.content}
        >
          <h4 className={styles['content-heading']}>Overview</h4>
          <p>{body}</p>
        </div>
      )}
    </div>
  )
}
