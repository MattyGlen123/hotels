import React from 'react'
import styles from './radio.module.scss'
import { RadioProps } from './radio.type'
import { iconPaths } from '../../core/paths/paths'

export const Radio = ({
  handleChange,
  isChecked,
  label,
  value,
  iconName,
  name
}: RadioProps) => {
  return (
    <label htmlFor={value} className={styles.label}>
      <input
        name={name}
        className={styles.input}
        type="radio"
        id={value}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      <div className={styles['select-box']}>
        <span className={styles.text}>{label}</span>
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {iconPaths[iconName]}
        </svg>
      </div>
    </label>
  )
}
