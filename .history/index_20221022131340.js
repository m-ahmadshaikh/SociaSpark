const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const config = require('./config');
const resolvers = require('./graphql/resolvers');

const typeDefs = require('./graphql/typedefs');

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(config.MONGO_DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to Mongodb');
    return server.listen();
  })
  .then((res) => {
    console.log('Listening at: ' + res.url);
  })
  .catch((e) => {
    console.log('Error: ' + e);
  });
