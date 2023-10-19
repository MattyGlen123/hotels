import axios, { AxiosError, AxiosResponse } from "axios"
import { ErrorMessageData, WeatherResponse } from "./weather.type"
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
    const error = err as ErrorMessageData;
    
    const message = error?.response?.data?.error?.message || false;
    
    return {
      data: null,
      isError: true,
      error: message ? new AxiosError(message) : new AxiosError('Sorry, something went wrong fetching your weather data. Please try again.')
    }
  }
}
