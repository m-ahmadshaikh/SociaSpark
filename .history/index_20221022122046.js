const { ApolloServer } = require('apollo-server');
const { gql } = require('graphql-tag');

const typeDefs = gql`
  type User {
    name: String
  }

  type Query {
    sayHello: String!
  }
`;

co;
