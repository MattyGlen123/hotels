import React from 'react'
import styles from './button.module.scss'
import { ButtonProps } from './button.type'

export const Button = ({ label, price, onClick }: ButtonProps) => {
  return (
    <button type="button" className={styles.button}>
      <h2>{label}</h2>
      <h1>{price}</h1>
    </button>
  )
}
