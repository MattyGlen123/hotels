import { useHotelsStore } from '@/store/hotels'
import { useEffect } from 'react'

export function useHotels() {
  const {
    activeFilter,
    fetchHotels,
    isLoading,
    isSuccess,
    isError,
    hotels,
    orderByPrice,
    orderByName,
    orderByStarRating
  } = useHotelsStore((state) => ({
    activeFilter: state.activeFilter,
    hotels: state.hotels.data,
    fetchHotels: state.hotels.query,
    isLoading: state.hotels.isLoading,
    isSuccess: state.hotels.isSuccess,
    isError: state.hotels.isError,
    orderByPrice: state.orderByPrice,
    orderByName: state.orderByName,
    orderByStarRating: state.orderByStarRating
  }))

  useEffect(() => {
    // TODO: remove semi-colon
    ;(async () => {
      await fetchHotels()

      orderByPrice()
    })()
  }, [fetchHotels, orderByPrice])

  const handleOrderChange = (value: string) => {
    if (value === 'price') {
      orderByPrice()
    } else if (value === 'alphabetically') {
      orderByName()
    } else if (value === 'star rating') {
      orderByStarRating()
    }
  }

  return {
    hotels,
    activeFilter,
    isLoading,
    isError,
    isSuccess,
    handleOrderChange
  }
}
