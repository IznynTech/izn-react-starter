/* eslint-disable no-underscore-dangle */
/**
 * app/ErrorHandler/index.js
 */
import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import Alert from '../components/Dialog/Alert';

/**
 * Error Context
 */
export const ErrorContext = createContext();

/**
 * Provider that take loader data
 */
export function ErrorProvider({ children }) {
  const error = useErrorProvider();
  return <ErrorContext.Provider value={error}>{children}</ErrorContext.Provider>;
}

ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook for get loader provider
 */
export function useErrorProvider() {
  const [isError, setIsError] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorType, setErrorType] = useState('general');
  const setRequestError = (error, message = '', title = '', type = 'general') => {
    const { response } = error;
    let _type = type;
    let _message = '';
    let _title = '';

    if (title === '' && response && typeof response.statusText !== 'undefined') {
      _title = response.statusText;
    } else if (title === '') {
      _title = 'Oops! Sorry, it’s failed.';
    } else if (title && title !== '') {
      _title = title;
    }

    if (typeof response !== 'undefined') {
      if (response && [400, 401].includes(response.status)) {
        _message = 'Not authenticated';
        _type = 'auth';
      } else if (response && response.status === 500) {
        _message = 'A server error occurred';
        _type = 'auth';
      } else if (response && response.data) {
        _message = response.data.error;
      } else if (typeof response.data.message !== 'undefined') {
        // eslint-disable-next-line prefer-destructuring
        _message = response.data.message;
      } else if (message && message !== '') {
        _message = message;
      }
      // else if (!status) {
      //   message = 'Cannot connect to the internet';
      //   errorType = 'auth';
      // }
    } else if (typeof error === 'string') {
      _message = error;
    }

    if (!_message || _message === '') {
      _message = 'Sorry request error, please try again.';
    }

    setIsError(true);
    setErrorMessage(_message);
    setErrorTitle(_title);
    setErrorType(_type);
  };

  const clearError = () => {
    setIsError(false);
    setErrorMessage('');
    setErrorTitle('');
    setErrorType('general');
  };

  return {
    isError,
    setIsError,
    errorTitle,
    setErrorTitle,
    errorMessage,
    setErrorMessage,
    errorType,
    setErrorType,
    setRequestError,
    clearError,
  };
}

/**
 * Hook for get loader context data
 */
export const useErrorHandler = () => useContext(ErrorContext);

/**
 * Main Component for App Error
 */
const ErrorHandler = () => {
  const { isError, errorTitle, errorMessage, clearError } = useErrorHandler();
  return (
    <Alert
      open={isError}
      title={errorTitle}
      onClose={setVisibility => {
        clearError();
        setVisibility(false);
      }}
    >
      {errorMessage}
    </Alert>
  );
};

export default ErrorHandler;
