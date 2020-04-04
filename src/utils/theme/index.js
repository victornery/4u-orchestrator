import { createMuiTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors';

export const theme = {
  breakpoints: {
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px'
  }
}

export const MTheme = createMuiTheme({
  palette: {
    primary: purple
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Montserrat'
    ].join(',')
  }
})