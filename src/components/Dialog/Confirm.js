/**
 * components/Dialog/index.js
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { DialogContentText } from '@material-ui/core';
import Dialog from './index';

const Confirm = props => {
  const { open, title, onSubmit, submitLabel, onCancel, cancelLabel, children, ...others } = props;
  const { t } = useTranslation();
  const actions = [
    {
      id: 'action-cancel',
      label: cancelLabel || t('text.cancel'),
      handler: (setVisibility, evt) => {
        if (onCancel) {
          onCancel(setVisibility, evt);
        } else {
          setVisibility(false);
        }
      },
    },
    {
      id: 'action-submit',
      label: submitLabel,
      props: {
        color: 'primary',
        variant: 'contained',
      },
      handler: onSubmit,
    },
  ];

  return (
    <Dialog open={open} title={title} actions={actions} maxWidth="md" {...others}>
      <DialogContentText id="dialog-description">{children}</DialogContentText>
    </Dialog>
  );
};

Confirm.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  onCancel: PropTypes.func,
};

export default Confirm;
