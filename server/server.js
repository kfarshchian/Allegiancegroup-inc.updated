const express = require('express');
const http = require('http'); //import http module
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express(); //creates an instance of an express server
require('dotenv').config()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  cache: "bounded",
});

// create server instance using http module with the app instance
const server = http.createServer(app); 

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


const startApolloServer = async (typeDefs, resolvers) => {
  await apolloServer.start();
  // This is attaching the apollo server as middleware, which will handle any incoming
  // requests from the apollo server, which then turns the requests into queries and
  // mutations.
  apolloServer.applyMiddleware({ app }); 

  db.once('open', () => {
    server.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    })
  })
};

startApolloServer(typeDefs, resolvers);
