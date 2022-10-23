import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';
import { setContext } from '@apollo/client/link/context';

const setAuthorizationLink = setContext((request, previousContext) => ({
  headers: { authorization: 'Bearer 1234' },
}));

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
