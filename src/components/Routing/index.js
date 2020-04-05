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

const Main = styled.main`
  min-height: 50vh;
`

const Routing = () => {
  const context = useContext(ThemeContext);
  const history = useHistory();
  const location = useLocation();
  
  useEffect(() => {

    if(!!context.isLoggedIn === false) {
      return history.push('/')
    }

    if(!!context.isLoggedIn && location.pathname === '/') {
      return history.push('/me')
    }

  }, [])

  return (
    <Fragment>
      <Header isLogged={context.isLoggedIn} />
        <Main>
          <Route path="/" component={Index} />
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