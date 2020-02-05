/**
 * components/ErrorField/styles.js
 */
import { makeStyles } from '@material-ui/core/styles';
const config = {
  root: `
    position: relative;
  `,
  layoutContainer: `
    max-width: 780px;
    margin: 0 auto;
  `,
  layoutMain: `
    padding: 40px 0;
  `,
  loaderRoot: `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
  `,
  loaderSpinner: `
    margin: 0 auto;
  `,
};

export default makeStyles(config, { name: 'Page' });
