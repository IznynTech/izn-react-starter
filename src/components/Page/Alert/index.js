/**
 * components/Page/Alert/index.js
 */
import React, { useState, useContext, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Alert from '../../Alert';

/**
 * Alert Context
 */
export const AlertContext = createContext();

/**
 * Provider that take alert data
 */
export function ProviderAlert({ children }) {
  const alert = useProviderAlert();
  return <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>;
}

ProviderAlert.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook for get alert provider
 */
export function useProviderAlert() {
  const [type, setType] = useState('');
  const [content, setContent] = useState('');
  const location = useLocation();
  const clearAlert = () => {
    setType('');
    setContent('');
  };

  //
  // USE EFFECT
  //
  useEffect(() => {
    const { state } = location;
    if (state && typeof state.messageType !== 'undefined') {
      setType(state.messageType);
    }
    if (state && typeof state.messageContent !== 'undefined') {
      setContent(state.messageContent);
    }

    return () => {
      setType('');
      setContent('');
    };
  }, []);

  return { type, content, setType, setContent, clearAlert };
}

/**
 * Hook for get alert context data
 */
export const usePageAlert = () => useContext(AlertContext);

/**
 * Main Component for Page Alert
 */
const PageAlert = () => {
  const { type, content } = usePageAlert();
  return <Alert type={type} message={content} />;
};

export default PageAlert;
