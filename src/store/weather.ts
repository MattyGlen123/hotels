import { create } from 'zustand'
import { type StateCreator } from 'zustand/vanilla'
import { getWeather } from '../api/weather';
import { formatTime } from '../util/formatDates';
import { WeatherStore, WeatherStoreStateValues } from './weather.type';

export const initalState: WeatherStoreStateValues = {
  location: ''
};

const weatherStore: StateCreator<WeatherStore> = (set, get) => ({
  ...initalState,
  setLocation: (location) => set({location}),
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
        console.error(`Error requesting getWeather.`, `Location: "${location}"` , error);

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