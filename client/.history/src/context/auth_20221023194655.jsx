import { createContext } from 'react';

const context = createContext();

export const useAuth = () => {
  const auth = useContext(context);
  return auth;
};

const initialState = {
  user: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return { ...state, user: payload };
    case 'LOGOUT':
      return { ...state, user: null };

    default:
      return state;
  }
};

export default function AuthProvider({ children }) {
  const [{ user }, dispatch] = useReducer(authReducer, initialState);
  const login = (data) => {
    console.log(data);
  };
  const logout = () => {};

  return (
    <context.Provider value={{ login, logout, user }}>
      {children}
    </context.Provider>
  );
}
