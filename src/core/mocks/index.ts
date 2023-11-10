import { CurrentWeatherData } from '@/core/types/weather.type'
import { Hotel } from '../types/hotel.type'

export const mockCurrentWeather: CurrentWeatherData = {
  temp: 10,
  time: '07:46 AM',
  conditionIcon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
  conditionText: 'Partly cloudy',
  location: 'Manchester',
  country: 'United Kingdom'
}

export const mockCurrentWeatherAPI = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    tz_id: 'Europe/London',
    localtime_epoch: 1697061287,
    localtime: '2023-10-11 22:54'
  },
  current: {
    last_updated_epoch: 1697060700,
    last_updated: '2023-10-11 22:45',
    temp_c: 15.0,
    temp_f: 59.0,
    is_day: 0,
    condition: {
      text: 'Light rain',
      icon: '//cdn.weatherapi.com/weather/64x64/night/296.png',
      code: 1183
    },
    wind_mph: 6.9,
    wind_kph: 11.2,
    wind_degree: 190,
    wind_dir: 'S',
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
}

const mockHotel: Hotel = {
  name: 'Iberostar Grand Salome',
  location: 'Costa Adeje, Tenerife',
  stars: 5,
  passengers: '2 Adults, 2 children & 1 infant',
  date: '3rd July 2019 for 7 days',
  departingLocation: 'East Midlands',
  price: 1136.5,
  overview:
    'Located on the coast of Tenerife, between Playa del Duque and Playa de Fanabe, this hotel offers gourmet dining, exclusive lavish spas, magnificent suites with spectacular views and a personal butler or concierge service to meet all of your needs.',
  image: {
    src: 'img123',
    alt: 'Hotel Iberostar Grand Salome'
  }
}

export const mockHotels: Hotel[] = [
  mockHotel,
  {
    name: 'Hotel Aguamarina Golf',
    location: 'Golf Del Sur, Tenerife',
    stars: 4,
    passengers: '2 Adults, 1 child',
    date: '27th May 2019 for 7 days',
    departingLocation: 'Liverpool',
    price: 696.8,
    overview:
      'The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
    image: {
      src: 'img123',
      alt: 'Hotel Aguamarina Golf'
    }
  },
  {
    name: 'Las Piramides Resort',
    location: 'Playa De Las Américas, Tenerife',
    stars: 3,
    passengers: '2 Adults, 2 children',
    date: '3rd July 2019 for 7 days',
    departingLocation: 'Manchster',
    price: 499.99,
    overview:
      'Step out of your spacious room and straight onto the bustling Veronicas Strip with this perfectly located Aparthotel. With 2 outdoor pools you’ll have plenty of space for sunbed lounging + daytime dips. There’s even a handy poolside bar – ideal for grazing the afternoon away.',
    image: {
      src: 'img123',
      alt: 'Iberostar Las Piramides Resort'
    }
  }
]
