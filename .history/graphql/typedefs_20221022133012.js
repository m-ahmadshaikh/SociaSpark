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
  input RegisterInput{
    
  }

  type Mutation{
    register(input: RegisterInput)
  }
`;

module.exports = typeDefs;
