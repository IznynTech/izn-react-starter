/**
 * components/PageLoader/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const PageLoader = ({ visible }) => {
  const classes = useStyles();
  if (visible) {
    return (
      <div className={classes.loaderRoot}>
        <div className={classes.loaderSpinner}>
          <CircularProgress />
        </div>
      </div>
    );
  }
  return null;
};

PageLoader.propTypes = {
  visible: PropTypes.bool,
};

export default PageLoader;
