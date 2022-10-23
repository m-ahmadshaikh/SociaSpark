import React from 'react';
import ReactDOM from 'react-dom/client';
import ApolloProvider from './ApolloProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider />
  </React.StrictMode>
);
