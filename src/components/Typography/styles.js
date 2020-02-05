/**
 * styles/typography.js
 */
import { makeStyles } from '@material-ui/core/styles';
export const config = {
  pageTitle: `
    font-size: 30px;
    line-height: 36px;
    font-weight: bold;
    margin: 0 0 30px;
  `,
  sectionTitle: `
    font-size: 24px;
    line-height: 28px;
    font-weight: bold;
    margin: 25px 0;
  `,
};

export default makeStyles(config, { name: 'Typography' });
