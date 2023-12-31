/* eslint-disable @next/next/no-img-element */
'use client'
import { Loading } from '@/components/loading/loading'

import { filters } from '@/core/mocks'
import { Card } from '@/components/card/card'
import styles from '../styles/index.module.scss'
import { Filters } from '@/components/filters/filters'
import { useHotels } from '@/core/hooks/use-hotels'

export default function Home() {
  const {
    hotels,
    activeFilter,
    isLoading,
    isError,
    isSuccess,
    handleOrderChange
  } = useHotels()

  return (
    <main className={styles.root}>
      <div className={styles.inner}>
        {isLoading && <Loading />}

        {!isLoading && isSuccess && (
          <div className={styles.content}>
            <Filters
              activeFilter={activeFilter}
              ariaLabel="Sorting Options"
              filters={filters}
              handleFilterChange={handleOrderChange}
            />

            {(hotels === null || hotels.length === 0) && (
              <p className={styles.error}>No hotels found. Please try again</p>
            )}

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
          </div>
        )}

        {!isLoading && isError && (
          <p className={styles.error}>
            Sorry, there was an issue finding the hotels. Please try again
            later.
          </p>
        )}
      </div>
    </main>
  )
}
