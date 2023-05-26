const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken, signTutorToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { _id }) => {
      return User.findById({ _id });
    },
  },

  Mutation: {
    updateUser: async (parent, { userId, username }) => {
      return User.findByIdAndUpdate(userId, {
        img,
        username,
        skills,
    });
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // This allows users to login
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      // If the username isn't found throw following error
      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }
      const correctPw = await user.isCorrectPassword(password);
      // If the password doesn't match the one in the db throw error
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    
  },
};

module.exports = resolvers;
