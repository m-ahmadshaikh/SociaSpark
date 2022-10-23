const { ApolloServer } = require('apollo-server');
const { gql } = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = gql`
  type User {
    name: String
  }

  type Query {
    users: User!
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return { name: 'ahmad' };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(
  'mongodb+srv://ahmadshaikhk:<password>@cluster0.w24vtac.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);
server.listen().then((res) => {
  console.log('listenign at: ' + res.url);
});
