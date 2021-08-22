import { gql } from "@apollo/client";

// for testing purposes with seed data
export const QUERY_USERS = gql`
  {
    users {
      username
      password
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
        messages {
          _id
          username
          messageBody
          createdAt
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      email
      bikeCount
      bikes {
        _id
        userId
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
        messages {
          _id
          username
          messageBody
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
      messages {
        _id
        username
        messageBody
        createdAt
      }
    }
  }
`;

export const QUERY_USER_BIKE = gql`
  {
    userBikes {
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
      messages {
        _id
        username
        messageBody
        createdAt
      }
    }
  }
`;
