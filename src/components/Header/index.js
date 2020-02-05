/**
 * components/Header/index.js
 */
import React from 'react';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}></div>
    </div>
  );
};

export default Header;
