import React from 'react'
import { Filters } from './filters'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { FiltersProps } from './filters.type'
import { filters } from '@/core/mocks'
import userEvent from '@testing-library/user-event'

describe('Filters', () => {
  const mockHandleFilterChange = jest.fn()

  const filtersProps: FiltersProps = {
    ariaLabel: 'Sorting Options',
    filters: filters,
    handleFilterChange: mockHandleFilterChange,
    activeFilter: 'star rating'
  }

  it('should render a checked filter', () => {
    render(<Filters {...filtersProps} />)

    const radio = screen.getByRole('radio', { checked: true })

    expect(radio).toBeInTheDocument()
  })

  it('should call handleFilterChange', async () => {
    render(<Filters {...filtersProps} />)

    const radio = screen.getByRole('radio', { name: 'sort by price' })

    await userEvent.click(radio)

    expect(mockHandleFilterChange).toHaveBeenNthCalledWith(1, 'price')
  })
})
