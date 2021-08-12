import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState('');
  const [userId, setUserId] = useState(null);
  const [isCreator, setIsCreator] = useState(false);
  const [nickname, setNickname] = useState('');
  const history = useHistory();
  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        history,
        userId,
        setUserId,
        isCreator,
        setIsCreator,
        nickname,
        setNickname,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const {
    authToken,
    setAuthToken,
    history,
    userId,
    setUserId,
    isCreator,
    setIsCreator,
    nickname,
    setNickname,
  } = useContext(AuthContext);
  return {
    authToken,
    setAuthToken,
    history,
    userId,
    setUserId,
    isCreator,
    setIsCreator,
    nickname,
    setNickname,
  };
};
