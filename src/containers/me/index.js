import React, { Component, Fragment } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'
import {TitleName, NumberCampaigns, ActiveCampaigns, ButtonsContainer, Button} from './style'

import imgCampaign from '@assets/imgCampaign.png'
import imgContacts from '@assets/imgContacts.png'
import imgReport from '@assets/imgReport.png'

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
          <Button>
            <img src={imgCampaign} />
            <span>Campanha</span>
          </Button>
          <Button>
            <img src={imgContacts} />
            <span>Contatos</span>
          </Button>
          <Button>
            <img src={imgReport} />
            <span>Relatórios</span>
          </Button>
        </ButtonsContainer>
        <Footer />

      </Fragment>          
    )
  }
}

export default Me