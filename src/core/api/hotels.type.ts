import { Hotel } from '@/core/types/index.type'
import { AxiosError } from 'axios'

export type HotelsDataResponse = Hotel[]

export type AxiosApiResponse = {
  isError: boolean
  error: AxiosError | null
}

export type AxiosApiDataResponse<TData> = AxiosApiResponse & {
  data: TData | null
}

export type HotelsResponse = AxiosApiDataResponse<HotelsDataResponse>
