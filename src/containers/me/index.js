import React from 'react'
import { ButtonsContainer, Button, SubButton, SubButtons } from './style'
import imgCampaign from '@assets/imgCampaign.png';
import imgContacts from '@assets/imgContacts.png';
import imgReport from '@assets/imgReport.png';
import imgCampaignCreate from '@assets/imgCampaignCreate.svg';
import imgCampaignEdit from '@assets/imgCampaignEdit.svg';
import { useHistory } from 'react-router-dom'

const Me = () => {
  const history = useHistory();

  return (                      
      <ButtonsContainer>
        <Button to="/campaign">
          <img src={imgCampaign} alt="Campanha" />
          <span>Campanha</span>
          <SubButtons>
            <SubButton onClick={ () => {
              history.push('/campaign');
            } }>
              <img src={imgCampaignCreate} alt="Criar nova campanha" />
              <span>Criar</span>
            </SubButton>
            <SubButton>
              <img src={imgCampaignEdit} alt="Editar campanha" />
              <span>Modificar</span>
            </SubButton>
          </SubButtons>
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
  )
}

export default Me