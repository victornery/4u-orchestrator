import React, { Fragment} from 'react'
import { Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Index from '@containers/index'
import Campaign from '@containers/campaign'
import CreateCampaign from '@containers/createCampaign'
import Me from '@containers/me'
import Register from '@containers/register'
import Reports from '@containers/reports'
import Header from '@components/Header'
import Footer from '@components/Footer'


const Main = styled.main`
  min-height: 50vh;
`

const Routing = () => (
  <Fragment>
    <Header isLogged={true} />
      <Main>
        <Route exact path="/" component={Index} />
        <Route exact path="/campaign" component={Campaign} />
        <Route exact path="/create/campaign" component={CreateCampaign} />
        <Route exact path="/me" component={Me} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reports" component={Reports} />
      </Main>
    <Footer />
  </Fragment>
)

export default Routing