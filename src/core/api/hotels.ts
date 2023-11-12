import axios, { AxiosError, AxiosResponse } from 'axios'
import { hotels } from '@/core/urls'
import { HotelsResponse } from './hotels.type'

export const getHotels = async (): Promise<HotelsResponse> => {
  try {
    const response: AxiosResponse = await axios.get(hotels.get)

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
