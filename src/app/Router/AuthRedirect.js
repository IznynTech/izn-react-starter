/**
 * AuthRedirect.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

const AuthRedirect = ({ location }) => {
  const { t } = useTranslation();
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: {
          ref: location,
          messageType: 'error',
          messageContent: t('message.accessAuth.invalid'),
        },
      }}
    />
  );
};

AuthRedirect.propTypes = {
  location: PropTypes.object,
};

export default AuthRedirect;
