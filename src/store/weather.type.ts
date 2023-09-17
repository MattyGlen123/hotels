type CurrentWeatherData = {
  temp: number,
  day: string,
  time: string,
  conditionIcon: string,
  conditionText: string,
  location: string,
  country: string
}

type WeatherStore = {
  searchTerm: {
    location: string,
    update: (text: string) => void
  };
  currentWeather: {
    data: CurrentWeatherData | null,
    query: (location: string) => Promise<void>,
    error: boolean
  }
}