import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components'
import Routing from '@components/Routing'
import { theme } from '@utils/theme'

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme.breakpoints}>
      <ConnectedRouter history={history}>
          <Routing />        
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  target,
);

registerServiceWorker();
