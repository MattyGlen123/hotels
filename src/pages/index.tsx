/* eslint-disable @next/next/no-img-element */
'use client'

import { StarRating } from '@/components/star-rating/star-rating'
import { Button } from '@/components/button/button'
// import { Loading } from '@/components/loading/loading'

export default function Home() {
  // const { isError, weatherData, isLoading, error } = useCurrentWeather()

  return (
    <main className="">
      <StarRating count={5} />
      <Button text="Book Now" subtext="£199.99" />

      {/* {isLoading && <Loading />} */}

      {/* {isError && <p>{error?.message}</p>} */}
    </main>
  )
}
