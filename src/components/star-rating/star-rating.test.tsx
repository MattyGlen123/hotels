import React from 'react'
import { StarRating } from './star-rating'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { StarRatingsProps } from './star-rating.type'

describe('Star Rating', () => {
  const starRatingProps: StarRatingsProps = {
    count: 3
  }

  it('should render the correct amount of stars', () => {
    render(<StarRating {...starRatingProps} />)

    expect(screen.getAllByLabelText('star rating').length).toEqual(3)
  })
})
