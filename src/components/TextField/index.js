/**
 * components/TextField/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';

const TextFieldCustom = ({ fullWidth, InputProps, InputLabelProps, ...other }) => {
  const classes = useStyles();
  //
  // Edit style input here
  //
  let InputPropsClasses = {
    input: classes.cssInput,
  };
  let InputLabelPropsClasses = {
    root: classes.cssLabel,
  };

  //
  // Don't change
  //
  if (typeof InputProps !== 'undefined' && typeof InputProps.classes !== 'undefined') {
    InputPropsClasses = InputProps.classes;
  }
  if (typeof InputLabelProps !== 'undefined' && typeof InputLabelProps.classes !== 'undefined') {
    InputLabelPropsClasses = InputLabelProps.classes;
  }

  let newInputProps = {};
  let newInputLabelProps = {};
  if (typeof InputProps !== 'undefined') {
    newInputProps = { ...InputProps };
  }
  if (typeof InputProps !== 'undefined') {
    newInputLabelProps = { ...InputLabelProps };
  }
  newInputProps.classes = InputPropsClasses;
  newInputLabelProps.classes = InputLabelPropsClasses;

  // Fullwidth
  let newFullWidth = true;
  if (typeof fullWidth !== 'undefined') {
    newFullWidth = fullWidth;
  }

  return (
    <TextField
      className={classes.margin}
      InputLabelProps={newInputLabelProps}
      InputProps={newInputProps}
      fullWidth={newFullWidth}
      {...other}
    />
  );
};

TextFieldCustom.propTypes = {
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
};

export default TextFieldCustom;
