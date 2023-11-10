/* eslint-disable @next/next/no-img-element */
'use client'

import { StarRating } from '@/components/star-rating/star-rating'
import { Button } from '@/components/button/button'
// import { Loading } from '@/components/loading/loading'

import { mockHotels } from '@/core/mocks'
import { Card } from '@/components/card/card'
import styles from '../styles/index.module.scss'

export default function Home() {
  // const { isError, weatherData, isLoading, error } = useCurrentWeather()

  return (
    <main className={styles.root}>
      <ul className={styles.list}>
        <li>
          <Card {...mockHotels[0]} />{' '}
        </li>
      </ul>

      {/* {isLoading && <Loading />} */}

      {/* {isError && <p>{error?.message}</p>} */}
    </main>
  )
}
