import { Hotel } from './hotel';

export type User = {
  id: string;
  username: string;
  createdAt: number;
  password: string;
  savedHotels: Hotel['hotelId'][];
}