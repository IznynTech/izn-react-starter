/**
 * pages/Alert.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from './styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const Alert = ({ type, message }) => {
  const classes = useStyles();
  if (type !== '' && message !== '') {
    const Icon = variantIcon[type];
    const messageComp = (
      <div className={classes.message}>
        <Icon className={classNames(classes.icon, classes.iconVariant)} />
        {message}
      </div>
    );

    return (
      <SnackbarContent
        className={classNames(classes[type], classes.root, 'page-alert')}
        aria-describedby="client-snackbar"
        message={messageComp}
      />
    );
  }
  return null;
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.node,
};

export default Alert;
