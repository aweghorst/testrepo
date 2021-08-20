import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    {
        user {
            username
            email
            bikeCount
            bikes {
                _id
                brand
                bike_model
                year
                serial
                description
                image
                status {
                    isLost
                    location
                    date
                }
                comments {
                    username
                    commentBody
                    createdAt
                }
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
            status {
                isLost
                location
                date
            }
            comment {
                username
                commentBody
                createdAt
            }
        }
    }
`;
