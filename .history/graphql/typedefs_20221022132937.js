const { gql } = require('apollo-server');
const Post = require('../models/Post');

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

  type Mutation{
    
  }
`;

module.exports = typeDefs;
