import { waitFor } from '@testing-library/react'
import { getWeather } from '../core/api/weather'
import { useWeatherStore } from './weather'
import { mockCurrentWeatherAPI } from '@/core/mocks'

const mockLocation = 'manchester'
jest.mock('../api/weather', () => ({
  getWeather: jest.fn()
}))

describe('useWeatherStore()', () => {
  it('should update state when setLocation() is called.', () => {
    const { setLocation } = useWeatherStore.getState()

    setLocation(mockLocation)

    const { location } = useWeatherStore.getState()

    expect(location).toEqual(mockLocation)
  })

  it(`should return today's weather when currentWeather.query() is called.`, async () => {
    const { currentWeather: currentWeatherQuery } = useWeatherStore.getState()

    const getWeatherMock = getWeather as jest.Mock

    getWeatherMock.mockResolvedValue({
      data: mockCurrentWeatherAPI,
      isError: false,
      error: null
    })

    await currentWeatherQuery.query(mockLocation)

    const { currentWeather } = useWeatherStore.getState()

    await waitFor(() => {
      expect(currentWeather.data).toEqual({
        temp: mockCurrentWeatherAPI.current.temp_c,
        conditionIcon: mockCurrentWeatherAPI.current.condition.icon,
        conditionText: mockCurrentWeatherAPI.current.condition.text,
        country: mockCurrentWeatherAPI.location.country,
        location: mockCurrentWeatherAPI.location.name,
        time: '10:54 PM'
      })
    })
  })
})
