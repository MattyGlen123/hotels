import axios, { AxiosError, AxiosResponse } from "axios"
import { WeatherResponse } from "./weather.type"
import { weather } from "@/core/urls"

export const getWeather = async (location: string): Promise<WeatherResponse> => {
  try {
    const response: AxiosResponse = await axios.get(weather.getByLocation(location))

    return {
      data: response.data,
      isError: false,
      error: null
    }
  } catch (err) {
    const error = err as AxiosError

    return {
      data: null,
      isError: true,
      error
    }
  }
}
