import axios, { AxiosError, AxiosResponse } from 'axios'
import { hotels } from '@/core/urls'
import { HotelsResponse } from './hotels.type'

export const getHotels = async (): Promise<HotelsResponse> => {
  console.log('-------- running')
  try {
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/api/hotels`
    )

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
