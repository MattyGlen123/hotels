import { CurrentWeatherData } from "@/core/types/weather.type";
import { AxiosError } from "axios";

export type WeatherStore = {
  location: string,
  setLocation: (text: string) => void,
  currentWeather: {
    data: CurrentWeatherData | null,
    query: (location: string) => Promise<void>,
    error: AxiosError | null,
    isError: boolean,
    isLoading: boolean
  }
}

export type WeatherStoreStateValues = Pick<WeatherStore, 'location'>