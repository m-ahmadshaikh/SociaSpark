import { ApolloClient, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  // Additional options
});

const client = new ApolloClient();
