export const weather = {
  getByLocation: (location: string) => `http://api.weatherapi.com/v1/current.json?key=8483c1c9f03f46f8aee113029232908&q=${location}&aqi=no`
}