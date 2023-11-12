import React, { useState } from 'react'
import styles from './filters.module.scss'
import { FiltersProps } from './filters.type'
import { Radio } from '../radio/radio'

export const Filters = ({
  ariaLabel,
  handleFilterChange,
  filters,
  activeFilter
}: FiltersProps) => {
  const [selectedOption, setSelectedOption] = useState(activeFilter)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    setSelectedOption(val)

    handleFilterChange(val)
  }

  return (
    <div className={styles.root} role="group" aria-labelledby={ariaLabel}>
      {filters.map(({ iconName, label, value }) => (
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
