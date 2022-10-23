import { createContext } from 'react';

const context = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  return <context.Provider>{children}</context.Provider>;
}
