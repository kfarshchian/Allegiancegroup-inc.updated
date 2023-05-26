import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query Users($id: ID!) {
    user(_id: $id) {
      username
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
   query Query($id: ID!) {
  user(_id: $id) {
    _id
    username
  }
}
`;

