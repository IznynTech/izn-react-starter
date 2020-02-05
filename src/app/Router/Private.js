/**
 * PrivateRoute.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { useAuth } from '../Auth';
import AuthRedirect from './AuthRedirect';

const Private = props => {
  const { path, exact } = props;
  const { user } = useAuth();

  return (
    <Route
      path={path}
      exact={exact}
      render={renderProps => {
        const Component = props.component;
        return user ? (
          <Component {...renderProps} />
        ) : (
          <AuthRedirect location={renderProps.location} />
        );
      }}
    />
  );
};

Private.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired,
};

export default withRouter(Private);
