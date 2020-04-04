import React, { Component, Fragment } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {
  LoginHolder,
  StyledInput
} from './style'
import { Button } from '@material-ui/core'

class Index extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <LoginHolder>
          <StyledInput type="text" label="Usuário, E-mail ou Telefone" />
          <StyledInput type="password" label="Senha" />
          <Button variant="contained"  size="large" color="primary">Entrar</Button>
        </LoginHolder>
        <Footer />
      </Fragment>
    )
  }
}

export default Index