import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MThemeProvider } from '@material-ui/core/styles'
import Routing from '@components/Routing'
import { theme, MTheme } from '@utils/theme'

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme.breakpoints}>
      <MThemeProvider theme={MTheme}>
        <ConnectedRouter history={history}>
            <Routing />        
        </ConnectedRouter>
      </MThemeProvider>
    </ThemeProvider>
  </Provider>,
  target,
);

registerServiceWorker();
