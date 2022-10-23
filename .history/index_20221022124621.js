const { ApolloServer } = require('apollo-server');
const { gql } = require('graphql-tag');
const mongoose = require('mongoose');
const config = require('./config');
const User = require('./models/User');
const typeDefs = gql`
  type User {
    name: String
  }

  type Query {
    users: User!
  }
`;
User;

const resolvers = {
  Query: {
    users: () => {
      return { name: 'ahmad' };
    },
  },
};

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
