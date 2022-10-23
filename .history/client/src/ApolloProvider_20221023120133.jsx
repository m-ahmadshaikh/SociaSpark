import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: InMemoryCache()
  headers: {
    // ...
  },
});
