import React, { Component, Fragment } from 'react'
import { ButtonsContainer, Button } from './style'
import imgCampaign from '@assets/imgCampaign.png';
import imgContacts from '@assets/imgContacts.png';
import imgReport from '@assets/imgReport.png';

class Me extends Component {
  render() {
    return (                      
      <Fragment>
        <ButtonsContainer>
          <Button>
            <img src={imgCampaign} alt="Campanha" />
            <span>Campanha</span>
          </Button>
          <Button>
            <img src={imgContacts} alt="Contatos" />
            <span>Contatos</span>
          </Button>
          <Button>
            <img src={imgReport} alt="Relatórios" />
            <span>Relatórios</span>
          </Button>
        </ButtonsContainer>
      </Fragment>
    )
  }
}

export default Me