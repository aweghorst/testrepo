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
<<<<<<< HEAD
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
=======
        messages {
          _id
          username
          messageBody
          createdAt
>>>>>>> 2b49c7528c0fc78649129a02664dfb7077df30bd
        }
      }
    }
  }
`;

<<<<<<< HEAD

export const QUERY_USER_BIKE = gql`
{
    userBikes {
=======
export const QUERY_USER = gql`
  {
    user {
      username
      email
      bikeCount
      bikes {
>>>>>>> 2b49c7528c0fc78649129a02664dfb7077df30bd
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

export const QUERY_LOST_BIKES = gql`
    {
        lostBikes{
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
        }
    }
`;
