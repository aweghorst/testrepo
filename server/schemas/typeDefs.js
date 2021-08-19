const { gql } = require('apollo-server-express');

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

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addBike(brand: String, bike_model: String, year: String, serial: String, description: String, image: String): Bike
        updateUser(email: String, password: String): User
        updateBike(bikeId: ID!, description: String, image: String): Bike
        updateStatus(bikeId: ID!, isLost: Boolean, location: String): Bike
        deleteBike(bikeId: ID!): User
        login(username: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;