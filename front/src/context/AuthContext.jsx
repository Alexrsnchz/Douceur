import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token') || null,
    user: null,
  });

  useEffect(() => {
    if (auth.token) {
      localStorage.setItem('token', auth.token);
    } else {
      localStorage.removeItem('token');
    }
  }, [auth.token]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
