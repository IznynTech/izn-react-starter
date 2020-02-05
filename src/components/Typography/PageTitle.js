/**
 * components/Typography/PageTitle.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const PageTitle = ({ as, children, ...others }) => {
  const classes = useStyles();
  let Tag = 'h1';
  if (as) {
    Tag = as;
  }

  return (
    <Tag className={classes.pageTitle} {...others}>
      {children}
    </Tag>
  );
};

PageTitle.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.string,
};

export default PageTitle;
