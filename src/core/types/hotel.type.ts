export type Stars = 1 | 2 | 3 | 4 | 5

export type Hotel = {
  name: string
  location: string
  stars: Stars
  passengers: string
  date: string
  departingLocation: string
  price: number
  overview: string
  image: {
    src: string
    alt: string
  }
}
