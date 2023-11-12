import React from 'react'
import { Radio } from './radio'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { RadioProps } from './radio.type'

describe('Radio', () => {
  const mockHandleChange = jest.fn()

  const radioProps: RadioProps = {
    handleChange: mockHandleChange,
    iconName: 'alpha',
    isChecked: false,
    label: 'Test label',
    value: 'Test vak'
  }

  it('should call handleChange method', async () => {
    render(<Radio {...radioProps} />)

    const radio = screen.getByRole('radio')

    await userEvent.click(radio)

    expect(mockHandleChange).toHaveBeenCalledTimes(1)
  })

  it('should render a checked Radio', async () => {
    render(<Radio {...radioProps} isChecked={true} />)

    const radio = screen.getByRole('radio', {
      name: radioProps.label as string
    })

    expect(radio).toBeChecked()
  })
})
