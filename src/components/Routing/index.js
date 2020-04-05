import React, { Fragment, useContext, useEffect } from 'react'
import { Route, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Index from '@containers/index'
import Campaign from '@containers/campaign'
import Me from '@containers/me'
import Register from '@containers/register'
import Reports from '@containers/reports'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { ThemeContext } from '@context'
import { API_BASE } from '@utils/requests'
import { initializeUser } from '@context/actions'

const Main = styled.main`
  min-height: 50vh;
`

const Routing = () => {
  const context = useContext(ThemeContext);
  const history = useHistory();
  const location = useLocation();
  
  useEffect(() => {

    // Verifica se existe o JWT em LocalStorage e o estado `isLoggedIn` é false

    if((!!localStorage.getItem('jwt')) && (!!context.isLoggedIn === false)) {
      // Vamos exibir o carregamento
      context.setLoading(true);

      API_BASE.get('/users/me')
      .then(({ data }) => {
        initializeUser(context, history, data);
      })
      .catch(() => {
        localStorage.removeItem('jwt')
        context.setLoading(false);
      })
    }

    // Tratar a situação de usuário deslogado e que tenta entrar em outra rota.
    if(!!context.isLoggedIn === false) {
      return history.push('/')
    }

    // Tratar a situação de usuário logado que tenta entrar na rota de login.
    if(!!context.isLoggedIn && location.pathname === '/') {
      return history.push('/me')
    }

  }, [])

  return (
    <Fragment>
      <Header isLogged={context.isLoggedIn} />
        <Main>
          <Route exact path="/" component={Index} />
          {
            context.isLoggedIn && (
              <Fragment>
                <Route exact path="/campaign" component={Campaign} />
                <Route exact path="/me" component={Me} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/reports" component={Reports} />
              </Fragment>
            )
          }
        </Main>
      <Footer />
    </Fragment>
  )
}

export default Routing