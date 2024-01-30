import { mockHotels } from "../types/mocks/hotel.js";
import { mockUser } from "../types/mocks/user.js";
export const resolvers = {
    Query: {
        hotels: () => mockHotels,
        user: () => mockUser
    },
};
