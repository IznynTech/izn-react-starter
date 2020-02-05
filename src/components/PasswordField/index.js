/**
 * components/ErrorField/index.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import Toggle from './Toggle';

const PasswordField = ({ InputProps, ...others }) => {
  const [showPassword, setShowPassword] = useState(false);

  let newInputProps = {
    endAdornment: (
      <Toggle
        onClick={() => {
          setShowPassword(!showPassword);
        }}
        visibility={!showPassword}
      />
    ),
  };

  if (typeof InputProps !== 'undefined') {
    newInputProps = { ...newInputProps, ...InputProps };
  }

  return (
    <TextField type={showPassword ? 'text' : 'password'} InputProps={newInputProps} {...others} />
  );
};

PasswordField.propTypes = {
  InputProps: PropTypes.object,
};

export default PasswordField;
