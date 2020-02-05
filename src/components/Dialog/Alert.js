/**
 * components/Dialog/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DialogContentText } from '@material-ui/core';
import Dialog from './index';

const Alert = props => {
  const { open, title, onClose, children, buttonLabel, ...others } = props;
  const actions = [
    {
      id: 'action-close',
      label: buttonLabel || 'Ok',
      props: {
        color: 'primary',
      },
      handler: (setVisibility, evt) => {
        if (onClose) {
          onClose(setVisibility, evt);
        } else {
          setVisibility(false);
        }
      },
    },
  ];

  return (
    <Dialog open={open} title={title} actions={actions} maxWidth="md" {...others}>
      <DialogContentText id="dialog-description">{children}</DialogContentText>
    </Dialog>
  );
};

Alert.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default Alert;
