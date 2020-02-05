/**
 * app/Auth/index.js
 */
import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../../hooks/useLocalStorage';
import { AUTH_STORAGE_NAME } from './constants';

/**
 * Auth Context
 */
export const AuthContext = createContext();

/**
 * Provider that take auth data
 */
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook for get auth provider
 */
export function useAuthProvider() {
  const [user, setUser] = useLocalStorage(AUTH_STORAGE_NAME, null);
  const clearUser = () => {
    setUser(null);
  };

  return { user, setUser, clearUser };
}

/**
 * Hook for get alert context data
 */
export const useAuth = () => useContext(AuthContext);
