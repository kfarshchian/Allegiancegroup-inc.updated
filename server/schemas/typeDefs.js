const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(_id: ID!): User
  }
  type Mutation {
    #Adds a message to the given chatroom, by the specified user
    addUser(
      username: String!
      email: String!
      password: String!
    ): Auth

    # This allows user to update their profile
    updateUser(userId: ID! ): User
    # This will allow a user to login
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
