import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Index from '@containers/index'
import CreateCampaign from '@containers/createCampaign'
import Me from '@containers/me'
import Register from '@containers/register'

const NavItem = styled(NavLink)`
  background: red;
`

const Routing = () => (
  <div>
    <Route exact path="/" component={Index} />
    <Route exact path="/create-campaign" component={CreateCampaign} />
    <Route exact path="/me" component={Me} />
    <Route exact path="/register" component={Register} />
  </div>
)

export default Routing