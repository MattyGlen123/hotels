import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers.js';
import gql from 'graphql-tag';
const typeDefs = gql `
  type User {
    id: ID!
    username: String!
    createdAt: Int!
    password: String!
    savedHotels: [String]!
  }

  type Hotel {
    hotelId: ID!
    name: String!
    location: String!
    stars: Int!
    pricePerNight: Int!
    overview: String!
    image: Image!
    passengers: Passengers!
    date: String!
    duration: Int!
    departingLocation: String! 
    price: Float!
  }

  type Image {
    src: String!
    alt: String!
  }

  type Passengers {
    adults: Int!
    children: Int
    infants: Int
  }

  type Query {
    user: User
    hotels: [Hotel]
  }
`;
//   type Mutation {
//     register(username: String!, password: String!): User!
//     login(username: String!, password: String!): User!
//     updateSavedHotels(hotel: Hotel): User['savedHotels'];
//   }
// `
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
