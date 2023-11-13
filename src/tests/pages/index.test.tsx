import React from 'react'
import Home from '../../pages/index'
import { useHotels } from '@/core/hooks/use-hotels'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockHotels } from '@/core/mocks'

jest.mock('src/core/api/hotels', () => ({
  getHotels: jest.fn()
}))

type UseHotels = Partial<ReturnType<typeof useHotels>>

type SetupOptions = {
  useHotels: UseHotels
}

jest.mock('src/core/hooks/use-hotels', () => ({
  useHotels: jest.fn().mockImplementation(() => ({
    state: jest.fn()
  }))
}))

const mockHandleOrderChange = jest.fn()

const defaultState = {
  activeFilter: 'price',
  isLoading: false,
  isSuccess: true,
  isError: false,
  hotels: mockHotels,
  handleOrderChange: mockHandleOrderChange
}

const setup = (options?: Partial<SetupOptions>) => {
  const setupOptions: Partial<SetupOptions> = {
    useHotels: defaultState,
    ...options
  }

  ;(useHotels as unknown as jest.Mock).mockReturnValue(setupOptions.useHotels)

  return render(<Home />)
}

describe('Home', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the loading spinner', () => {
    setup({ useHotels: { ...defaultState, isLoading: true } })

    expect(screen.getByLabelText('Loading')).toBeInTheDocument()
  })

  it('should render an error message when the fetch request fails', () => {
    setup({ useHotels: { ...defaultState, isLoading: false, isError: true } })

    expect(
      screen.getByText('Sorry, there was an issue finding the hotels.', {
        exact: false
      })
    ).toBeInTheDocument()
  })

  it('should render an error message when the fetch request fails', () => {
    setup({ useHotels: { ...defaultState, isLoading: false, isError: true } })

    expect(
      screen.getByText('Sorry, there was an issue finding the hotels.', {
        exact: false
      })
    ).toBeInTheDocument()
  })

  it('should render an No Results message when the fetch returns an empty array', () => {
    setup({
      useHotels: {
        ...defaultState,
        hotels: []
      }
    })

    expect(
      screen.getByText('No hotels found. Please try again')
    ).toBeInTheDocument()
  })

  it('should render a list of hotels', () => {
    setup()

    expect(screen.getAllByRole('article').length).toEqual(mockHotels.length)
  })

  it('should pre-select the price filter', () => {
    setup()

    expect(
      screen.getByRole('radio', { name: 'sort by price', checked: true })
    ).toBeInTheDocument()
  })
})
