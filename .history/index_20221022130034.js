const { ApolloServer } = require('apollo-server');
const { gql } = require('graphql-tag');
const mongoose = require('mongoose');
const config = require('./config');
const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
  }

  type Query {
    posts: [Post]!
  }
`;

const resolvers = {
  Query: {
    posts: async () => {
      try {
      } catch (error) {}
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
