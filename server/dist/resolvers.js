import { mockHotels } from "./mocks/hotel.js";
import { mockUser } from "./mocks/user.js";
export const resolvers = {
    Query: {
        hotels: () => mockHotels,
        user: () => mockUser
    },
};
// import { Hotel, User } from "./server.js";
// export const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//     user() {
//       return {
//         id: '1',
//         username: 'Robin Wieruch',
//         createdAt: 123456789
//       };
//     },
//     hotel() {
//       return {
//         hotelId: '1',
//         name: 'Hotel 1',
//         location: 'Location 1',
//         stars: 1,
//         pricePerNight: 100,
//         overview: 'Overview 1',
//         image: 'Image 1'
//       };
//     },
//     savedHotels(_: User, args: { userId: User['id'] }) {
//       const { userId } = args;
//       return {
//         userId: userId,
//         hotelId: '1',
//       };
//     }
//   },
//   Mutation: {
//     updateSavedHotels(hotel: Hotel) {
//       return {
//         hotel
//       }
//     }
//   }
// };
