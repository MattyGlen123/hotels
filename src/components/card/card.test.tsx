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
    expect(
      screen.getByRole('heading', { level: 3, name: cardProps.name })
    ).toBeInTheDocument()
  })

  describe('passengers', () => {
    it('should render with no children or infants', () => {
      render(<Card {...cardProps} passengers={{ adults: 2 }} />)

      expect(screen.getByTestId('passengers')).toHaveTextContent('2 Adults')
    })

    it('should render with no infants', () => {
      render(
        <Card
          {...cardProps}
          passengers={{
            adults: 2,
            children: 1
          }}
        />
      )

      expect(screen.getByTestId('passengers')).toHaveTextContent(
        '2 Adults, 1 child'
      )
    })

    it('should render with no children', () => {
      render(
        <Card
          {...cardProps}
          passengers={{
            adults: 2,
            infants: 1
          }}
        />
      )

      expect(screen.getByTestId('passengers')).toHaveTextContent(
        '2 Adults, 1 infant'
      )
    })

    it('should render with all passenger types', () => {
      render(
        <Card
          {...cardProps}
          passengers={{
            adults: 1,
            children: 2,
            infants: 2
          }}
        />
      )

      expect(screen.getByTestId('passengers')).toHaveTextContent(
        '1 Adult, 2 children & 2 infants'
      )
    })
  })
})
