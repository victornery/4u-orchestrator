import React, { Fragment, Component } from 'react'
import Login from '@components/Login'
import MuiAlert from '@material-ui/lab/Alert';
import { Backdrop, Snackbar } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ThemeContext } from '@context'

const Alert = (props) => <MuiAlert style={{ position: "absolute", top: 40, right: 40 }} elevation={6} variant="filled" {...props} />

class Index extends Component {
  static contextType = ThemeContext

  render() {
    const { isLoading, isLoginError } = this.context

    return (
    <Fragment>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={isLoginError} autoHideDuration={9000}>
        <Alert severity="error">Usuário ou senha inválido(s)</Alert>
      </Snackbar>
      <Backdrop style={{ zIndex: 1300, color: '#fff', width: '100%', height: '100%'}} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Login />
    </Fragment>
    )
  }
}

export default Index