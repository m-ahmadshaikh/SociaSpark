import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';
import { setContext } from '@apollo/client/link/context';

const setAuthorizationLink = setContext(() => {
  const jwt = localStorage.getItem('token');

  return { headers: { authorization: jwt ? `Bearer: ${jwt}` : '' } };
});

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
