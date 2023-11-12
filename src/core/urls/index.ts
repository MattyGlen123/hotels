export const weather = {
  getByLocation: (location: string, WEATHER_API_KEY: string) =>
    `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`
}

export const hotels = {
  get: '/api/hotels'
}
