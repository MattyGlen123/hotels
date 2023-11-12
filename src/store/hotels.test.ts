import { waitFor } from '@testing-library/react'
import { useHotelsStore } from './hotels'
import { getHotels } from '@/core/api/hotels'
import { mockHotels } from '@/core/mocks'

jest.mock('../core/api/hotels', () => ({
  getHotels: jest.fn()
}))

describe('useHotelsStore()', () => {
  it('should update the activeFilter when setActiveFilter() is called.', () => {
    const mockActiveFilter = 'price'
    const { setActiveFilter } = useHotelsStore.getState()

    setActiveFilter(mockActiveFilter)

    const { activeFilter } = useHotelsStore.getState()

    expect(activeFilter).toEqual(mockActiveFilter)
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
