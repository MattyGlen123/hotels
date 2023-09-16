import { create } from 'zustand'
import { type StateCreator } from 'zustand/vanilla'
import { getWeather } from '../api/weather';
import { formatDay, formatTime } from '../util/formatDates';

const initalState = {
  searchTerm: '',
  weatherDetails: {
    data: null,
    error: false
  }
}

const weatherStore: StateCreator<WeatherStore> = (set, get) => ({
  ...initalState,
  searchTerm: {
    location: '',
    update: (text) => set({
      searchTerm: {
        ...get().searchTerm,
        location: text
      }
    })
  },
  weatherDetails: {
    data: null,
    error: false,
    query: async (location) => {
      set({
        weatherDetails: {
          ...get().weatherDetails,
          error: false
        }
      })

      const { data, isError, error } = await getWeather(location);

      if (isError) {
        return set({
          weatherDetails: {
            ...get().weatherDetails,
            data: null,
            error: true,
          }
        })
      }

      if (data) {
        set({
          weatherDetails: {
            ...get().weatherDetails,
            data: {
              temp: data.current.temp_c,
              conditionIcon: data.current.condition.icon,
              conditionText: data.current.condition.text,
              country: data.location.country,
              day: formatDay(data.location.localtime),
              location: data.location.name,
              time: formatTime(data.location.localtime)
            }
          }
        })
      }
    }
  }
});

export const useWeatherStore = create(weatherStore);