/**
 * components/ErrorField/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const ErrorField = ({ errors, name, messages }) => {
  const classes = useStyles();
  let message = 'Error';
  let isError = false;

  if (errors && typeof errors[name] !== 'undefined') {
    isError = true;
    const { type } = errors[name];
    if (messages && typeof messages[type] !== 'undefined') {
      message = messages[type];
    }
  }

  if (isError) {
    return (
      <div className={classes.root}>
        <p className={classes.content}>{message}</p>
      </div>
    );
  }
  return null;
};

ErrorField.propTypes = {
  errors: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default ErrorField;
