/**
 * app.js
 *
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { create } from 'jss';
import {
  StylesProvider,
  jssPreset,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import JssPluginTemplate from 'jss-plugin-template';

import { Http } from '../services/http';
import i18nInit from './i18n';
import Root from './Root';

// Init API service
Http.init();

// i18n initiation
i18nInit();

// material-ui configuration
// theming
const THEME = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Poppins", sans-serif',
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0,0,0,.7)',
      },
    },
  },
});

// jss plugin
const jss = create({
  plugins: [...jssPreset().plugins, JssPluginTemplate()],
});

const App = () => (
  <BrowserRouter>
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={THEME}>
        <Root />
      </MuiThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

export default App;
