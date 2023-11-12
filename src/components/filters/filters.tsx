import React, { useState } from 'react'
import styles from './filters.module.scss'
import { FiltersProps } from './filters.type'
import { Radio } from '../radio/radio'

export const Filters = ({ ariaLabel, handleSort, filters }: FiltersProps) => {
  const [selectedOption, setSelectedOption] = useState('alphabetically')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    setSelectedOption(val)

    handleSort(val)
  }

  return (
    <div className={styles.root} role="group" aria-labelledby={ariaLabel}>
      {filters.map(({ iconName, initalChecked, label, value }) => (
        <Radio
          key={`${ariaLabel}-${value}`}
          value={value}
          label={label}
          handleChange={handleChange}
          iconName={iconName}
          isChecked={selectedOption === value}
        />
      ))}
    </div>
  )
}
