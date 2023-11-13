import { waitFor } from '@testing-library/react'
import { useHotelsStore } from './hotels'
import { getHotels } from '@/core/api/hotels'
import { mockHotels } from '@/core/mocks'

jest.mock('../api/hotels', () => ({
  getHotels: jest.fn()
}))

describe('useHotelsStore()', () => {
  it('should default to inital state', () => {
    const { activeFilter, hotels } = useHotelsStore.getState()

    expect(activeFilter).toEqual('price')
    expect(hotels.data).toBeNull()
    expect(hotels.isLoading).toEqual(false)
    expect(hotels.isError).toEqual(false)
  })

  it(`should return hotelsData when hotel.query() is called.`, async () => {
    const {
      hotels: { query: fetchHotels }
    } = useHotelsStore.getState()

    const getHotelsMock = getHotels as jest.Mock

    getHotelsMock.mockResolvedValue({
      data: mockHotels,
      isError: false,
      error: null
    })

    await fetchHotels()

    const {
      hotels: { data: hotelsData }
    } = useHotelsStore.getState()

    await waitFor(() => {
      expect(hotelsData).toEqual(mockHotels)
    })
  })
})
