/* eslint-disable @next/next/no-img-element */
"use client";

import { useWeatherStore } from "../store/weather";
import { Search } from "../components/search/search";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CurrentWeather } from "@/components/current-weather/current-weather";

export default function Home() {
  const { query, push } = useRouter();

  const { weatherData, weatherQuery, location, setLocation, weatherNoResults } =
    useWeatherStore((state) => ({
      weatherData: state.currentWeather.data,
      weatherQuery: state.currentWeather.query,
      location: state.location,
      setLocation: state.setLocation,
      weatherNoResults: state.currentWeather.error,
    }));

  useEffect(() => {
    if (
      query.location &&
      !Array.isArray(query.location) &&
      location != query.location
    ) {
      const { location } = query;

      setLocation(location);

      push(`/?location=${encodeURIComponent(location)}`);

      weatherQuery(location);
    }
  }, [push, query, query.location, location, weatherQuery, setLocation]);

  return (
    <main className="flex min-h-screen flex-col py-12 px-4 bg-sky-950 text-slate-50	">
      <Search />

      {weatherNoResults && <p>No results found, please search again.</p>}

      {weatherData && <CurrentWeather {...weatherData} />}
    </main>
  );
}
