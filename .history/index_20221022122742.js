const { ApolloServer } = require('apollo-server');
const { gql } = require('graphql-tag');

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

server.listen().then((res) => {
  console.log('listenign at: ' + res.url);
});
