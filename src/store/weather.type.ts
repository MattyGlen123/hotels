import { CurrentWeatherData } from "@/core/types/weather.type";

export type WeatherStore = {
  searchTerm: {
    location: string,
    update: (text: string) => void
  };
  currentWeather: {
    data: CurrentWeatherData | null,
    query: (location: string) => Promise<void>,
    error: boolean
  }
}