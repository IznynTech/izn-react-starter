/**
 * components/Dialog/Actions.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const DialogActions = ({ actions, setVisibility }) => (
  <div>
    {actions.map(action => {
      let actionProps = {};
      if (typeof action.props !== 'undefined' && action.props) {
        actionProps = action.props;
      }
      return (
        <Button
          key={action.id}
          onClick={evt => {
            evt.preventDefault();
            if (action.handler) {
              action.handler(setVisibility, evt);
            } else {
              setVisibility(false);
            }
          }}
          style={{ marginLeft: 10 }}
          {...actionProps}
        >
          {action.label}
        </Button>
      );
    })}
  </div>
);

DialogActions.propTypes = {
  actions: PropTypes.array,
  setVisibility: PropTypes.func,
};

export default DialogActions;
