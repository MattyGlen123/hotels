import { renderHook } from '@testing-library/react'
import { useHotels } from './use-hotels'
import { useHotelsStore } from '@/core/store/hotels'

type UseHotelsStore = Partial<ReturnType<typeof useHotelsStore>>

type SetupOptions = {
  useHotelsStore: UseHotelsStore
}

jest.mock('src/store/hotels', () => ({
  useHotelsStore: jest.fn().mockImplementation(() => ({
    state: jest.fn()
  }))
}))

const defaultState = {
  activeFiler: 'price',
  setActiveFilter: jest.fn(),
  hotels: {
    data: null,
    error: null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    query: jest.fn()
  },
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
// TODO: fix test
describe('useHotels', () => {
  it('should return default values', () => {
    const { result } = setup()

    const {
      isLoading,
      hotels,
      isError,
      activeFilter,
      handleOrderChange,
      isSuccess
    } = result.current

    expect(isError).toBe(false)
    expect(hotels).toBeNull()
    expect(isLoading).toBe(true)
    expect(activeFilter).toBe('price')
  })
})
