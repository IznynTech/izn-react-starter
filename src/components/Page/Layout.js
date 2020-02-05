/**
 * components/Page/Layout.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Root from './Root';
import useStyles from './styles';

const PageLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Root>
      <Header />
      <div className={classes.layoutContainer}>
        <div className={classes.layoutMain}>{children}</div>
      </div>
      <Footer />
    </Root>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
