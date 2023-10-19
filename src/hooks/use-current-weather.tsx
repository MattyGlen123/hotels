import { useWeatherStore } from "@/store/weather";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useCurrentWeather() {
  const {
    query: { location: locationQueryString },
  } = useRouter();

  const {
    currentWeather: {
      data: weatherData,
      query: weatherQuery,
      error,
      isError,
      isLoading,
    },
    location,
    setLocation,
  } = useWeatherStore();

  useEffect(() => {
    if (typeof locationQueryString === "string" && !location) {
      setLocation(locationQueryString);
      weatherQuery(locationQueryString);
    }
  }, [location, locationQueryString, setLocation, weatherQuery]);

  return { weatherData, isLoading, isError, error };
}
