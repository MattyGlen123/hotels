import { create } from 'zustand'
import { type StateCreator } from 'zustand/vanilla'
import { getWeather } from '../core/api/weather'
import { formatTime } from '../util/formatDates'
import { WeatherStore, WeatherStoreStateValues } from './weather.type'

export const initalState: WeatherStoreStateValues = {
  location: ''
}

const weatherStore: StateCreator<WeatherStore> = (set, get) => ({
  ...initalState,
  setLocation: (location) => set({ location }),
  currentWeather: {
    data: null,
    error: null,
    isError: false,
    isLoading: false,
    query: async (location) => {
      set({
        currentWeather: {
          ...get().currentWeather,
          data: null,
          error: null,
          isError: false,
          isLoading: true
        }
      })

      const { data, isError, error } = await getWeather(location)

      if (isError) {
        console.error(
          `Error requesting getWeather.`,
          `Location: "${location}"`,
          error
        )

        return set({
          currentWeather: {
            ...get().currentWeather,
            data: null,
            isError,
            error,
            isLoading: false
          }
        })
      }

      if (data) {
        set({
          currentWeather: {
            ...get().currentWeather,
            data: {
              temp: data.current.temp_c,
              conditionIcon: data.current.condition.icon,
              conditionText: data.current.condition.text,
              country: data.location.country,
              location: data.location.name,
              feelslike: data.current.feelslike_c,
              time: formatTime(data.location.localtime)
            },
            isError: false,
            error: null,
            isLoading: false
          }
        })
      }
    }
  }
})

export const useWeatherStore = create(weatherStore)
