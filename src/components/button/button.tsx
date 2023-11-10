import React from 'react'
import styles from './button.module.scss'
import { ButtonProps } from './button.type'

export const Button = ({ text, subtext, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      <h2 className={styles.subtext}>{subtext}</h2>
      <h1 className={styles.text}>{text}</h1>
    </button>
  )
}
