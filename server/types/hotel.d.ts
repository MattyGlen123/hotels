export type Hotel = {
  hotelId: string;
  name: string;
  location: string;
  stars: number;
  pricePerNight: number;
  price: number,
  overview: string;
  date: string;
  duration: number,
  departingLocation: string,
  passengers: {
    adults:  number,
    children?:  number,
    infants?: number
  },
  image: {
    src: string,
    alt: string
  };
}
