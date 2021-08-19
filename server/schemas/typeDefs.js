//import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Bike {
        _id: ID
        brand: String
        bike_model: String
        year: String
        serial: String
        description: String
        image: String
        status: [Status]
    }

    type Status {
        _id: ID
        isLost: Boolean
        location: String
        date: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        bikeCount: Int
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
        addBike(brand: String, bike_model: String, year: String, serial: String, description: String, image: String): Bike
        updateUser(email: String, password: String): User
        updateBike(bikeId: ID!, description: String, image: String): Bike
        updateStatus(bikeId: ID!, isLost: Boolean, location: String): Bike
        deleteBike(bikeId: ID!): User
        login(username: String!, password: String!): Auth
         addComment(bikeId: ID!, commentBody: String!): Bike
    }

`;

module.exports = typeDefs;
