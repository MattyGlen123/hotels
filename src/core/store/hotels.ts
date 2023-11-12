import { create } from 'zustand'
import { type StateCreator } from 'zustand/vanilla'
import { getHotels } from '../api/hotels'
import { HotelsStore, HotelsStoreStateValues } from './hotels.type'

export const initalState: HotelsStoreStateValues = {
  // TODO: fix the filter options
  activeFilter: 'price'
}

const hotelsStore: StateCreator<HotelsStore> = (set, get) => ({
  ...initalState,
  setActiveFilter: (activeFilter) => set({ activeFilter }),
  hotels: {
    data: null,
    error: null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    query: async () => {
      set({
        hotels: {
          ...get().hotels,
          isLoading: true
        }
      })

      const { data, isError, error } = await getHotels()

      if (isError) {
        console.error(`Error requesting getHotels.`, error)

        return set({
          hotels: {
            ...get().hotels,
            data: null,
            isError,
            error,
            isLoading: false,
            isSuccess: false
          }
        })
      }

      if (data) {
        set({
          hotels: {
            ...get().hotels,
            data,
            isError: false,
            error: null,
            isLoading: false,
            isSuccess: true
          }
        })
      }
    }
  },
  orderByPrice: () => {
    const newHotelsOrder = {
      ...get().hotels.data?.sort((a, b) => b.price - a.price)
    }

    set({
      hotels: {
        ...get().hotels,
        ...newHotelsOrder
      }
    })
  },
  orderByName: () => {
    const newHotelsOrder = {
      ...get().hotels.data?.sort((a, b) => a.name.localeCompare(b.name))
    }

    set({
      hotels: {
        ...get().hotels,
        ...newHotelsOrder
      }
    })
  },
  orderByStarRating: () => {
    const newHotelsOrder = {
      ...get().hotels.data?.sort((a, b) => b.stars - a.stars)
    }

    set({
      hotels: {
        ...get().hotels,
        ...newHotelsOrder
      }
    })
  }
})

export const useHotelsStore = create(hotelsStore)
