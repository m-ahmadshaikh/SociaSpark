import { createContext } from 'react';

const context = createContext({
  login: (data) => {},
  logout: () => {},
});

import React from 'react';

export default function AuthProvider({ children }) {
  return <context.Provider>{children}</context.Provider>;
}
