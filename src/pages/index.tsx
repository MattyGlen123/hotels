/* eslint-disable @next/next/no-img-element */
"use client";

import { useWeatherStore } from "../store/weather";
import { Search } from "../components/search/search";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  
  const { weatherData, weatherNoResults } = useWeatherStore((state) => ({
    weatherData: state.weatherDetails.data,
    weatherNoResults: state.weatherDetails.error
  }));

  useEffect(() => {
    if(weatherData?.location)
      router.push(`/?location=${encodeURIComponent(weatherData?.location)}`);
    
  }, [router, weatherData])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
