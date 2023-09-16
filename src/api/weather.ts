import axios, { AxiosError, AxiosResponse } from "axios"
import { ApiResponse, WeatherDataResponse } from "./weather.type"

export const getWeather = async (location: string): Promise<ApiResponse> => {

  try {
    const response: AxiosResponse = await axios({
      method: 'GET',
      url: `http://api.weatherapi.com/v1/current.json?key=8483c1c9f03f46f8aee113029232908&q=${location}&aqi=no`
    })

    return {
      data: response.data,
      isError: false,
      error: null
    }
  } catch (error) {

    return {
      data: null,
      isError: true,
      error: error as string
    }
  }
}
