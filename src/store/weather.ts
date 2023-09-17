import { create } from 'zustand'
import { type StateCreator } from 'zustand/vanilla'
import { getWeather } from '../api/weather';
import { formatDay, formatTime } from '../util/formatDates';

const initalState = {
  searchTerm: '',
  currentWeather: {
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
  currentWeather: {
    data: null,
    error: false,
    query: async (location) => {
      set({
        currentWeather: {
          ...get().currentWeather,
          error: false
        }
      })

      const { data, isError, error } = await getWeather(location);

      if (isError) {
        return set({
          currentWeather: {
            ...get().currentWeather,
            data: null,
            error: true,
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