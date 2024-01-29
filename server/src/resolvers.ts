
import { mockHotels } from "./mocks/hotel.js";
import { mockUser } from "./mocks/user.js";

export const resolvers = {
  Query: {
    hotels: () => mockHotels,
    user: () => mockUser
  },
};