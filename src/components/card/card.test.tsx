import React from 'react'
import { Card } from './card'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CardProps } from './card.type'
import { mockHotel } from '@/core/mocks'

describe('Card', () => {
  const cardProps: CardProps = {
    ...mockHotel,
    initallyExpanded: true,
    cardIndex: 1
  }

  it('should render the default data', () => {
    render(<Card {...cardProps} />)

    expect(screen.getByAltText(cardProps.image.alt)).toBeInTheDocument()
    expect(screen.getByRole(cardProps.name, { level: 3 })).toBeInTheDocument()
  })
})
