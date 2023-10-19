/* eslint-disable @next/next/no-img-element */
"use client";

import { Search } from "../components/search/search";
import { CurrentWeather } from "@/components/current-weather/current-weather";
import { Loading } from "@/components/loading/loading";
import { useCurrentWeather } from "@/hooks/use-current-weather";

export default function Home() {
  const { isError, weatherData, isLoading, error } = useCurrentWeather();

  return (
    <main className="flex min-h-screen flex-col py-12 px-4 bg-sky-950 text-slate-50	">
      <Search />

      {isLoading && <Loading />}

      {isError && <p>{error?.message}</p>}

      {weatherData && <CurrentWeather {...weatherData} />}
    </main>
  );
}
