import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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

const SendButton = ({ onClick, disabled, input }) => 
  (<button onClick={onClick} disabled={!!input === false}>
    <img src={NextIcon} style={{  
      position: 'absolute',
      top: '50%',
      right: 15,
      transform: 'translateY(-50%)',
      cursor: 'pointer'
    }} alt="Enviar" />
  </button>)

  const MuiMoreVertIcon = (onClick) => <MoreVertIcon style={{ 
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 38,
    cursor: 'pointer'
  }} />

function getStepContent(stepIndex, handleNext) {
  const [form, setForm] = useState({
    name: '',
    message: '',
    media: '',
    list: [],
    testList: []
  })

  React.useEffect(() => {
    console.log(form)
  }, [form])

  switch (stepIndex) {
    case 'campaignName':
      return (
          <CampaignContainer >
            <img src={ImgGroup} alt="Nome da Campanha" />
            <p>Nome da Campanha</p>
            <div style={{ position: 'relative', maxHeight: 60 }}>
              <MuiMoreVertIcon />
              <input type="text" id="name" value={form.name} onInput={(event) => { const value = event.target.value; setForm({ ...form, name: value }) }} placeholder="Digite aqui o nome da sua campanha" />
              <SendButton onClick={handleNext} input={form.name} />
            </div>
          </CampaignContainer>
      );
    case 'createMessage':
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Criar mensagem" />
          <p>Mensagem</p>
          <div style={{ position: 'relative', maxHeight: 60 }}>
            <MuiMoreVertIcon />
            <input type="text" id="message" value={form.message} onInput={(event) => { const value = event.target.value; setForm({ ...form, message: value }) }} placeholder="Cole, digite ou busque uma mensagem já enviada" />
            <SendButton onClick={handleNext} input={form.message} />
          </div>
          {/* <TransitionModal attributeContent title="Mensagem" isMidia={true} placeholder="Cole, digite ou busque uma mensagem já enviada" /> */}
        </CampaignContainer>
      );
    case 'insertMedia':
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Mídia" />
          <p>Mídia</p>
          <div style={{ position: 'relative', maxHeight: 60 }}>
            <MuiMoreVertIcon />
            <input type="text" value={form.media} onInput={(event) => { const value = event.target.value; setForm({ ...form, media: value }) }} placeholder="Faça upload de uma nova mídia" />
            <SendButton onClick={handleNext} input={form.media} />
          </div>
          {/* <TransitionModal attributeContent={form, setForm, 'media'} title="Mídia" isMidia={true} placeholder="Faça upload de uma nova mídia" /> */}
        </CampaignContainer>
      );
    case 'associateContacts':
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Atribuir Contatos" />
          <p>Contatos</p>
          <div style={{ position: 'relative', maxHeight: 60 }}>
            <MuiMoreVertIcon />
            <input type="text" value={form.list} onInput={(event) => { const value = event.target.value; setForm({ ...form, list: value }) }} placeholder="Faça upload de uma nova lista ou selecione uma já existente" />
            <SendButton onClick={handleNext} input={form.list} />
          </div>
          {/* <TransitionModal attributeContent={form, setForm, 'contactList'} title="Contatos" isTable={true} /> */}
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
          <CampaignContainer>
            <img className="imgPhone" src={imgSmartphone} alt="Telefone" />
            {/* <TransitionModal attributeContent={form, setForm, 'testList'} isTable={true} /> */}
          </CampaignContainer>
        </Fragment>
      );

    case 'schedule':
      return (
        <CampaignContainer >
          <img src={imgCalendar} alt="Agendar envio" />
          <p>Agendar Envio</p>
          <div style={{ position: 'relative', maxHeight: 60 }}>
            <MoreVertIcon />
            <input type="date" onChange={(event) => { const value = event.target.value; setForm({ ...form, schedule: value }) }} />
            <SendButton onClick={handleNext} input={form.schedule} />
          </div>
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
