type WeatherData = {
  temp: number,
  day: string,
  time: string,
  conditionIcon: string,
  conditionText: string,
  location: string,
  country: string
}

type WeatherStore = {
  weatherDetails: {
    data: WeatherData | null,
    query: (location: string) => Promise<void>,
    error: boolean
  }
}