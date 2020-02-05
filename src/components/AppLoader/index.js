/**
 * components/AppLoader/index.js
 */
import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

/**
 * Loader Context
 */
export const LoaderContext = createContext();

/**
 * Provider that take loader data
 */
export function LoaderProvider({ children }) {
  const loader = useLoaderProvider();
  return <LoaderContext.Provider value={loader}>{children}</LoaderContext.Provider>;
}

LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook for get loader provider
 */
export function useLoaderProvider() {
  const [appLoader, setAppLoader] = useState(false);

  return { appLoader, setAppLoader };
}

/**
 * Hook for get loader context data
 */
export const useAppLoader = () => useContext(LoaderContext);

/**
 * Main Component for App Loader
 */
const AppLoader = () => {
  const { appLoader } = useAppLoader();
  return <Loader visible={appLoader} />;
};

export default AppLoader;
