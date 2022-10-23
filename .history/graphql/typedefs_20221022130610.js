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
`;

module.exports = typeDefs;
