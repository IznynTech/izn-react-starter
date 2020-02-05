/**
 * components/Dialog/index.js
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import Button from '../Button';
import Actions from './Actions';
import useStyles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Dialog = props => {
  const { open, title, onClose, children, actions, ...others } = props;
  const [visibility, setVisibility] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setVisibility(open);

    return () => {
      setVisibility(false);
    };
  }, [open]);

  const handleClose = evt => {
    evt.preventDefault();
    if (onClose) {
      onClose();
    } else {
      setVisibility(false);
    }
  };

  return (
    <MuiDialog
      open={visibility}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      disableBackdropClick
      disableEscapeKeyDown
      TransitionComponent={Transition}
      className={classes.paper}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0,0,0,0.7)',
        },
      }}
      onClose={handleClose}
      {...others}
    >
      {title ? <DialogTitle id="dialog-title">{title}</DialogTitle> : null}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {actions ? (
          <Actions actions={actions} setVisibility={setVisibility} />
        ) : (
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

Dialog.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  actions: PropTypes.array,
  onClose: PropTypes.func,
};

export default Dialog;
