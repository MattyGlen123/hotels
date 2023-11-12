/* eslint-disable @next/next/no-img-element */
'use client'
import { Loading } from '@/components/loading/loading'

import { filters } from '@/core/mocks'
import { Card } from '@/components/card/card'
import styles from '../styles/index.module.scss'
import { Filters } from '@/components/filters/filters'
import { useEffect } from 'react'
import { useHotelsStore } from '@/store/hotels'

export default function Home() {
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

  return (
    <main className={styles.root}>
      {isLoading && <Loading />}

      {!isLoading && isSuccess && (
        <>
          <Filters
            activeFilter={activeFilter}
            ariaLabel="Sorting Options"
            filters={filters}
            handleFilterChange={handleOrderChange}
          />

          <ul className={styles.list}>
            {hotels?.map((hotel, index) => (
              <li key={hotel.name}>
                <Card
                  {...hotel}
                  initallyExpanded={index === 0}
                  cardIndex={index + 1}
                />
              </li>
            ))}
          </ul>
        </>
      )}

      {!isLoading && isError && (
        <p className={styles.error}>
          Sorry, their was an issue finding the hotels. Please try again later.
        </p>
      )}
    </main>
  )
}
