import React from 'react';
import ReactDOM from 'react-dom/client';
import ApolloProvider from './ApolloProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider />
  </React.StrictMode>
);
