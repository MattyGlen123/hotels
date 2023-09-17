/* eslint-disable @next/next/no-img-element */
"use client";

import { useWeatherStore } from "../store/weather";
import { Search } from "../components/search/search";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function Home() {
  const { query, push } = useRouter();
  
  const { weatherData, weatherQuery, searchTerm, weatherNoResults } = useWeatherStore((state) => ({
    weatherData: state.currentWeather.data,
    weatherQuery: state.currentWeather.query,
    searchTerm: state.searchTerm,
    weatherNoResults: state.currentWeather.error
  }));

  useEffect(() => {
    if(query.location && !Array.isArray(query.location) && searchTerm.location != query.location) {
      const { location } = query;

      searchTerm.update(location);

      push(`/?location=${encodeURIComponent(location)}`);

      weatherQuery(location);
    }
  }, [push, query, query.location, searchTerm, weatherQuery]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-4 bg-sky-950 text-slate-50	">
      <Search />
      
      {weatherNoResults && (<p>No results found, please search again.</p>)}
      
      {weatherData && (
        <>
          <p>{weatherData.day}</p>
          <p>{weatherData.time}</p>
          <img
              src={`https:${weatherData.conditionIcon}`}
              alt={weatherData.conditionText}
              className="dark:invert"
              width={100}
              height={24}
            />
          <p>{weatherData.temp}</p>
          <p>{weatherData.conditionText}</p>
          <p>{weatherData.location}</p>
          <p>{weatherData.country}</p>
        </>
      )}
    </main>
  );
}
