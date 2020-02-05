/**
 * components/AppLoader/Loader.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const Loader = ({ visible }) => {
  const classes = useStyles();
  if (visible) {
    return (
      <div className={classes.root}>
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      </div>
    );
  }
  return null;
};

Loader.propTypes = {
  visible: PropTypes.bool,
};

export default Loader;
