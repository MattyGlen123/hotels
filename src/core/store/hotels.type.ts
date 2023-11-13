import { Hotel } from '@/core/types/index.type'
import { AxiosError } from 'axios'

export type HotelsStore = {
  activeFilter: string
  hotels: {
    data: Hotel[] | null
    query: () => Promise<void>
    error: AxiosError | null
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
  }
  orderByPrice: () => void
  orderByName: () => void
  orderByStarRating: () => void
}

export type HotelsStoreStateValues = Pick<HotelsStore, 'activeFilter'>
