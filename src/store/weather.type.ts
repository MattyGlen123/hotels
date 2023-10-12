import { CurrentWeatherData } from "@/core/types/weather.type";

export type WeatherStore = {
  location: string,
  setLocation: (text: string) => void,
  currentWeather: {
    data: CurrentWeatherData | null,
    query: (location: string) => Promise<void>,
    error: boolean
  }
}

export type WeatherStoreStateValues = Pick<WeatherStore, 'location'>