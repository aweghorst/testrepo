import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    {
        user {
            username
            bikes {
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
    }
`;

export const QUERY_ALL_BIKES = gql`
    {
        bikes {
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