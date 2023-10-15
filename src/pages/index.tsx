/* eslint-disable @next/next/no-img-element */
"use client";

import { Search } from "../components/search/search";
import { CurrentWeather } from "@/components/current-weather/current-weather";
import { Loading } from "@/components/loading/loading";
import { useCurrentWeather } from "@/hooks/use-current-weather";

export default function Home() {
  const { weatherNoResults, weatherData, isLoading } = useCurrentWeather();

  return (
    <main className="flex min-h-screen flex-col py-12 px-4 bg-sky-950 text-slate-50	">
      <Search />

      {isLoading && <Loading />}

      {weatherNoResults && <p>No results found, please search again.</p>}

      {weatherData && <CurrentWeather {...weatherData} />}
    </main>
  );
}
