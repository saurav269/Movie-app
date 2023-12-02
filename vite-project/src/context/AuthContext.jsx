import React, { createContext, useContext, useState } from 'react';

// Create the authentication context
export const AuthContext = createContext();

// Create the AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  // Initialize the authentication state using useState
  const [authState, setAuthState] = useState({
    isAuth: false,
    token: null,
  });

  // Function to log in a user
  const loginUser = (token) => {
    setAuthState({
      ...authState,
      isAuth: true,
      token: token,
    });
  };

  // Function to log out a user
  const logoutUser = () => {
    setAuthState({
      ...authState,
      isAuth: false,
      token: null,
    });
  };

  // Provide the context value to children components
  const contextValue = {
    authState,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the authentication context
export const useAuth = () => useContext(AuthContext);
