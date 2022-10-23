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
    username:String!
    password:String!
    confirmPassword:String!
    email:String!
  }

  type Mutation{
    register(input: RegisterInput)
  }
`;

module.exports = typeDefs;
