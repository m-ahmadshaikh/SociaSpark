import { createContext } from 'react';

const context = createContext();

export const useAuth = () => {
  const auth = useContext(context);
  return auth;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (data) => {};
  const logout = () => {};

  return (
    <context.Provider value={{ login, logout, user }}>
      {children}
    </context.Provider>
  );
}
