import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      user {
        _id
        username
        email
      }
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: ID!) {
    updateUser(userId: $userId) {
      username
    }
  }
`;

