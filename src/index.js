import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MThemeProvider } from '@material-ui/core/styles'
import Routing from '@components/Routing'
import { ContextProvider, initialState } from '@context'
import { theme, MTheme } from '@utils/theme'

const target = document.querySelector('#root');

render(
  <ContextProvider value={initialState}>
    <ThemeProvider theme={theme.breakpoints}>
      <MThemeProvider theme={MTheme}>
        <Router>
          <Switch>
            <Routing />        
          </Switch>
        </Router>
      </MThemeProvider>
    </ThemeProvider>
  </ContextProvider>,
  target,
);

registerServiceWorker();
