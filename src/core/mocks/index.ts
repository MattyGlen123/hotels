import { CurrentWeatherData } from "@/core/types/weather.type";

export const mockCurrentWeather: CurrentWeatherData = {
    temp: 10,
    time: '07:46 AM',
    conditionIcon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    conditionText: 'Partly cloudy',
    location: 'Manchester',
    country:'United Kingdom'
};

export const mockCurrentWeatherAPI = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    tz_id: "Europe/London",
    localtime_epoch: 1697061287,
    localtime: "2023-10-11 22:54"
  },
  current: {
    last_updated_epoch: 1697060700,
    last_updated: "2023-10-11 22:45",
    temp_c: 15.0,
    temp_f: 59.0,
    is_day: 0,
    condition: {
      text: "Light rain",
      icon: "//cdn.weatherapi.com/weather/64x64/night/296.png",
      code: 1183
    },
    wind_mph: 6.9,
    wind_kph: 11.2,
    wind_degree: 190,
    wind_dir: "S",
    pressure_mb: 1011.0,
    pressure_in: 29.85,
    precip_mm: 1.4,
    precip_in: 0.06,
    humidity: 100,
    cloud: 75,
    feelslike_c: 14.9,
    feelslike_f: 58.8,
    vis_km: 3.8,
    vis_miles: 2.0,
    uv: 1.0,
    gust_mph: 6.8,
    gust_kph: 10.9
  }
};