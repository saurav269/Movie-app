import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const PrivateRoute = ({ children }) => {
  const { authState } = useAuth(); // Using useAuth hook to access authentication state

  // Check if the user is authenticated, if not, redirect to the login page
  if (!authState.isAuth) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children (protected content)
  return children;
};

export default PrivateRoute;
