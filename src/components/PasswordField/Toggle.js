/**
 * components/PasswordField/Toggle.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';

const PasswordFieldToggle = ({ onClick, visibility }) => (
  <InputAdornment position="end">
    <IconButton
      className="button-toggle-password"
      aria-label="Toggle password visibility"
      onClick={onClick}
    >
      {visibility ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  </InputAdornment>
);

PasswordFieldToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  visibility: PropTypes.bool,
};

export default PasswordFieldToggle;
