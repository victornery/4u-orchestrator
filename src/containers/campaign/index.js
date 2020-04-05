import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ImgGroup from '@assets/imgGroup.png'
import imgCalendar from '@assets/imgCalendar.png'
import imgCongratulation from '@assets/imgCongratulation.png'
import NextIcon from '@assets/send.png'
import imgSmartphone from '@assets/imgSmartphone.png'
import TransitionModal from '@components/Modal'

import { CampaignContainer, TextTop, Buttons } from './style'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['campaignName', 'createMessage', 'insertMedia', 'associateContacts', 'sendTest', 'schedule'];
}

const SendButton = ({ onClick }) => <img src={NextIcon} style={{  
    position: 'absolute',
    top: '50%',
    right: 15,
    transform: 'translateY(-50%)'
  }} onClick={onClick} alt="Enviar" />

function getStepContent(stepIndex, handleNext) {
  const [form, setForm] = useState({})

  React.useEffect(() => {
    console.log(form)
  }, [form])

  switch (stepIndex) {
    case 'campaignName':
      return (
          <CampaignContainer >
            <img src={ImgGroup} alt="Nome da Campanha" />
            <p>Nome da Campanha</p>
            <div style={{ position: 'relative' }}>
              <input type="text" id="name" value={form.name} onInput={(event) => { const value = event.target.value; setForm({ ...form, name: value }) }} placeholder="Digite aqui o nome da sua campanha" />
              <SendButton onClick={handleNext} />
            </div>
          </CampaignContainer>
      );
    case 'createMessage':
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Criar mensagem" />
          <p>Mensagem</p>
          <div style={{ position: 'relative' }}>
            <input type="text" id="message" value={form.message} onInput={(event) => { const value = event.target.value; setForm({ ...form, message: value }) }} placeholder="Cole, digite ou busque uma mensagem já enviada" />
            <SendButton onClick={handleNext} />
          </div>
          <TransitionModal attributeContent title="Mensagem" isMidia={true} placeholder="Cole, digite ou busque uma mensagem já enviada" />
        </CampaignContainer>
      );
    case 'insertMedia':
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Mídia" />
          <p>Mídia</p>
          <input type="text" value={form.media} onInput={(event) => { const value = event.target.value; setForm({ ...form, media: value }) }} placeholder="Faça upload de uma nova mídia" />
          <TransitionModal attributeContent={form, setForm, 'media'} title="Mídia" isMidia={true} placeholder="Faça upload de uma nova mídia" />
        </CampaignContainer>
      );
    case 'associateContacts':
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Atribuir Contatos" />
          <p>Contatos</p>
          <TransitionModal attributeContent={form, setForm, 'contactList'} title="Contatos" isTable={true} />
        </CampaignContainer>
      );
    case 'sendTest':
      return (
        <Fragment>
          <TextTop>
            <span>
              Quase acabando!<br />
              Só enviar um teste e ver se ficou tudo como esperado.<br />
              Qualquer erro, reporte aqui
            </span>
          </TextTop>
          <CampaignContainer >
            <img className="imgPhone" src={imgSmartphone} alt="Telefone" />
            <TransitionModal attributeContent={form, setForm, 'testList'} isTable={true} />
          </CampaignContainer>
        </Fragment>
      );

    case 'schedule':
      return (
        <CampaignContainer >
          <img src={imgCalendar} alt="Agendar envio" />
          <p>Agendar Envio</p>
          <input type="date" onChange={(event) => { const value = event.target.value; setForm({ ...form, schedule: value }) }} />
        </CampaignContainer>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function Campaign() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState('campaignName');
  const [countStep, setNewStep] = React.useState(0)
  const steps = getSteps();

  const handleNext = () => {
    setNewStep(countStep + 1);
    setActiveStep(steps[countStep + 1]);
  };

  const handleBack = () => {
    if(countStep >= 1) {
      setNewStep(countStep - 1);
      setActiveStep(steps[countStep - 1]);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <div>
        {activeStep === steps.length ? (
          <div>
            <CampaignContainer >
              <p>Configuração de campanha Finalizado</p>
              <img src={imgCongratulation} alt="Campanha finalizada" />
              <span>Começar o disparo imediatamente</span>
            </CampaignContainer>
            <Buttons>
              <div>
                <Button onClick={handleReset}>Voltar</Button>
              </div>
            </Buttons>
          </div>
        ) : (
            <div>
              <div>{getStepContent(activeStep, handleNext)}</div>
              <Buttons>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Voltar
                  </Button>
                </div>
              </Buttons>
            </div>
          )}
      </div>
    </div>
  );
}
