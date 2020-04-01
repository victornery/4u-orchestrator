import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components'
import Routing from '@components/Routing'
import { theme } from '@utils/theme'
import { StyledGlobal } from './style'

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme.breakpoints}>
      <ConnectedRouter history={history}>
        <StyledGlobal>
          <Routing />
        </StyledGlobal>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  target,
);
registerServiceWorker();
