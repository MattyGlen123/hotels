import React from 'react'
import { Button } from './button'
import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonProps } from './button.type'

describe('Button', () => {
  const mockOnClick = jest.fn()

  const buttonsProps: ButtonProps = {
    text: '£199.99',
    subtext: 'Book Now',
    onClick: mockOnClick
  }

  it('should render the button', () => {
    render(<Button {...buttonsProps} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render the correct text', () => {
    render(<Button {...buttonsProps} />)

    const button = screen.getByRole('button')

    expect(
      within(button).getByRole('heading', { level: 1 })
    ).toBeInTheDocument()

    expect(
      within(button).getByRole('heading', { level: 2 })
    ).toBeInTheDocument()
  })

  it('should call the onClick', async () => {
    render(<Button {...buttonsProps} />)

    const button = screen.getByRole('button')

    await userEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
