/**
 * components/Page/Root.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ProviderAlert } from './Alert';
import PageLoader from './Loader';
import useStyles from './styles';

const PageRoot = ({ children }) => {
  const classes = useStyles();
  const isLoading = false;

  // Did Unmount
  // const didUnmount = () => {};
  // useEffect(() => didUnmount, []);

  return (
    <ProviderAlert>
      <div className={classes.root}>
        {children}
        <PageLoader visible={isLoading} />
      </div>
    </ProviderAlert>
  );
};

PageRoot.propTypes = {
  children: PropTypes.node,
};

export default PageRoot;
