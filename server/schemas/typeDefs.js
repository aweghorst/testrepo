//import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Bike {
    _id: ID
    brand: String
    bike_model: String
    year: String
    serial: Int
    description: String
    image: String
    status: [Status]
  }

  type Status {
    isLost: Boolean
    location: String
    date: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bikes: [Bike]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    bikes(_id: ID!): Bike
    user: User
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addBike(
      brand: String
      model: String
      year: String
      serial: Int
      description: String
      image: String
    ): Bike
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateBike(_id: ID!, status: Boolean, description: String): Bike
    login(username: String!, password: String!): Auth
    addComment(bikeId: ID!, commentBody: String!): Bike
  }
`;

module.exports = typeDefs;
