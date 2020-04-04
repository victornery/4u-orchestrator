import React, { Component, Fragment } from 'react'
import {TitleName, NumberCampaigns, ActiveCampaigns, ButtonsContainer, Button} from './style'
import imgCampaign from '@assets/imgCampaign.png';
import imgContacts from '@assets/imgContacts.png';
import imgReport from '@assets/imgReport.png';

class Me extends Component {
  render() {
    return (                      
      <Fragment>
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
      </Fragment>
    )
  }
}

export default Me