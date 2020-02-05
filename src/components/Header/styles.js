/**
 * components/Header/styles.js
 */
import { makeStyles } from '@material-ui/core/styles';
const config = {
  root: `
    padding: 20px;
    background-color: #efefef;
    border-bottom: 3px solid #cccccc;
    position: relative;
  `,
  content: `
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  left: `
    margin-left: auto;
    font-size: 14px;
    text-align: left;
  `,
};

export default makeStyles(config, { name: 'Header' });
