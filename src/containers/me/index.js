import React, { Component, Fragment } from 'react'

import Header from '@components/Header'
import {TitleName, NumberCampaigns, ActiveCampaigns, ButtonsContainer, Button} from './style'

class Me extends Component {
  render() {
    return (                      
      <Fragment>
        <Header isLogged={true} />
        <TitleName>Olá, Fulando de tal</TitleName> 
        <NumberCampaigns>Campanhas agendadas: 3</NumberCampaigns>
        <ActiveCampaigns>
          <p>Campanhas Ativas: 3</p>
          <p>Saldo: R$ 350,00</p>
          </ActiveCampaigns>
        
        <ButtonsContainer>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </ButtonsContainer>

      </Fragment>
    )
  }
}

export default Me