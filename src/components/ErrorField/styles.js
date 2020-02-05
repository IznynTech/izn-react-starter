/**
 * components/ErrorField/styles.js
 */
import { makeStyles } from '@material-ui/core/styles';
const config = {
  root: `
    margin-top: 4px;
  `,
  content: `
    margin: 0;
    font-size: 12px;
    line-height: 12px;
    color: #c4242a;
  `,
};

export default makeStyles(config, { name: 'ErrorField' });
