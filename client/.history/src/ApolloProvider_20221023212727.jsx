import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';
import { setContext } from '@apollo/client/link/context';
import jwtDecode from 'jwt-decode';

const setAuthorizationLink = setContext(() => ({
  const jwt = jwtDecode(localStorage.getItem('token'))
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
