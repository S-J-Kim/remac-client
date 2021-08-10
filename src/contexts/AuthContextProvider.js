import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState('');
  const history = useHistory();
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, history }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const { authToken, setAuthToken, history } = useContext(AuthContext);
  return { authToken, setAuthToken, history };
};
