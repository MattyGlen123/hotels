import React from 'react'
import { StarRating } from './card'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { StarRatingsProps } from './card.type'

describe('Star Rating', () => {
  const starRatingProps: StarRatingsProps = {
    count: 3
  }

  it('should render the correct amount of stars', () => {
    render(<StarRating {...starRatingProps} />)

    expect(screen.getAllByLabelText('star rating').length).toEqual(3)
  })
})
