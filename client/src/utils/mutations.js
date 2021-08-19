import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_BIKE = gql`
    mutation addBike(
        $brand: String
        $bike_model: String
        $year: String
        $serial: Int
        $description: String
        $image: String
    ) {
        addBike(
            brand: $brand
            bike_model: $bike_model
            year: $year
            serial: $serial
            description: $description
            image: $image
        ) {
            _id
            brand
            bike_model
            year
            serial
            description
            image
            status
        }
    }
`;
