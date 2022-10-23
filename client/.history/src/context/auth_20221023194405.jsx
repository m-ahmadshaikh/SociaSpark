import { createContext } from 'react';

const context = createContext();

export const useAuth = () => {
  const auth = useContext(context);
  return auth;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  login: (data) => {};
  logout: () => {};

  return (
    <context.Provider value={{ login, logout, user }}>
      {children}
    </context.Provider>
  );
}
