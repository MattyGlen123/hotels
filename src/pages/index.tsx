/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '../components/button/button'
// import { Loading } from '@/components/loading/loading'

export default function Home() {
  // const { isError, weatherData, isLoading, error } = useCurrentWeather()

  return (
    <main className="">
      <Button label="Book Now" price="£199.99" />

      {/* {isLoading && <Loading />} */}

      {/* {isError && <p>{error?.message}</p>} */}
    </main>
  )
}
