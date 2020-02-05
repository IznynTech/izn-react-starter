/**
 * components/Footer/index.js
 */
import React from 'react';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.content}>
        {'Design and Build by '}
        <a href="https://github.com/iznyn" target="_blank">
          @iznyn
        </a>
      </p>
    </div>
  );
};

export default Footer;
