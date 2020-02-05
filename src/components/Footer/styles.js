/**
 * components/Footer/styles.js
 */
import { makeStyles } from '@material-ui/core/styles';
const config = {
  root: `
    padding: 20px;
    margin-top: 40px;
  `,
  content: `
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #666666;
  `,
};

export default makeStyles(config, { name: 'Footer' });
