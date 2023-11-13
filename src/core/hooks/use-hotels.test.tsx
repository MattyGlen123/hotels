import { renderHook } from '@testing-library/react'
import { useHotels } from './use-hotels'
import { useHotelsStore } from '@/core/store/hotels'

type UseHotelsStore = Partial<ReturnType<typeof useHotelsStore>>

type SetupOptions = {
  useHotelsStore: UseHotelsStore
}

jest.mock('src/core/store/hotels', () => ({
  useHotelsStore: jest.fn().mockImplementation(() => ({
    state: jest.fn()
  }))
}))

const mockFetchHotels = jest.fn()

const defaultState = {
  activeFilter: 'price',
  fetchHotels: mockFetchHotels,
  isLoading: false,
  isSuccess: false,
  isError: false,
  hotels: null,
  orderByPrice: jest.fn(),
  orderByName: jest.fn(),
  orderByStarRating: jest.fn()
}

const setup = (options?: Partial<SetupOptions>) => {
  const setupOptions: Partial<SetupOptions> = {
    useHotelsStore: defaultState,
    ...options
  }

  ;(useHotelsStore as unknown as jest.Mock).mockReturnValue(
    setupOptions.useHotelsStore
  )

  return renderHook<ReturnType<typeof useHotels>, undefined>(() => useHotels())
}

describe('useHotels', () => {
  it('should return default state', () => {
    const { result } = setup()

    const { isLoading, hotels, isError, activeFilter, isSuccess } =
      result.current

    expect(isError).toBe(false)
    expect(isLoading).toBe(false)
    expect(isSuccess).toBe(false)
    expect(hotels).toBeNull()
    expect(activeFilter).toBe('price')
  })

  it('should call fetchHotels', () => {
    setup()

    expect(mockFetchHotels).toHaveBeenCalledTimes(1)
  })
})
