/**
 * components/Alert/index.js
 */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const useStyles = makeStyles(theme =>
  createStyles({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.dark,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(),
    },
    message: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    root: {
      marginBottom: 25,
      boxShadow: 'none',
    },
    cssOutlinedInput: {
      fontSize: '12px',
      lineHeight: 1.5,
      '&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
        borderColor: '#ffbfbf', // hovered
      },
      '&$cssFocused $notchedOutline': {
        borderColor: '#ff5a5a', // focused
        borderWidth: '1px',
      },
    },
    notchedOutline: {},
    cssFocused: {},
    disabled: {},
  }),
);

export default useStyles;
