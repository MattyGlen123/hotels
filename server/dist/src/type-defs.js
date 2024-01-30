import gql from 'graphql-tag';
export const typeDefs = gql `
  type User {
    id: ID!
    email: String!
    createdAt: Int!
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

  type AuthUser {
    token: String!
    user: User!
  }

  input AuthInput {
    email: String!
    password: String!
  }

  type Query {
    user: User
    hotels: [Hotel]
  }

  type Mutation {
    signup(input: AuthInput!): AuthUser!
    signin(input: AuthInput!): AuthUser!
  }
`;
