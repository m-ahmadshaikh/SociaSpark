import jwtDecode from 'jwt-decode';
import { createContext, useContext, useReducer } from 'react';

const context = createContext();

export const useAuth = () => {
  const auth = useContext(context);
  return auth;
};

if (localStorage.getItem('token')) {
  const jwt = jwtDecode(localStorage.getItem('token'));
}
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
    localStorage.setItem('token', data.token);

    dispatch({ type: 'LOGIN', payload: data });
  };
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <context.Provider value={{ login, logout, user }}>
      {children}
    </context.Provider>
  );
}
