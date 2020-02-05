/**
 * Root.js
 *
 */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import store from 'store';
import { Http } from '../services/http';
import AppLoader, { LoaderProvider } from '../components/AppLoader';
import Router from './Router';
import { AuthProvider } from './Auth';
import ErrorHandler, { ErrorProvider } from './ErrorHandler';

const Root = () => {
  //
  // USE EFFECT
  //
  useEffect(() => {
    const auth = store.get('APP_USER');
    if (auth) {
      Http.setupToken();
    } else {
      Http.resetToken();
    }
  }, []);

  //
  // USE EFFECT
  //
  return (
    <LoaderProvider>
      <ErrorProvider>
        <AuthProvider>
          <Router />
          <AppLoader />
          <ErrorHandler />
        </AuthProvider>
      </ErrorProvider>
    </LoaderProvider>
  );
};

export default Root;
