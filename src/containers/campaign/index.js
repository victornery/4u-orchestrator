import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ImgGroup from '@assets/imgGroup.png'
import imgCalendar from '@assets/imgCalendar.png'
import imgCongratulation from '@assets/imgCongratulation.png'
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
  return [1, 2, 3, 4, 5, 6];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <CampaignContainer >
            <img src={ImgGroup} alt="Nome da Campanha" />
            <p>Nome da Campanha</p>
            <input type="text" />
          </CampaignContainer>
        </div>
      );
    case 1:
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Criar mensagem" />
          <p>Mensagem</p>
          <TransitionModal title="Mensagem" isMidia={true} placeholder="cole, digite ou busque uma mensagem já enviada" />
        </CampaignContainer>
      );
    case 2:
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Mídia" />
          <p>Mídia</p>
          <TransitionModal title="Mídia" isMidia={true} placeholder="Faça upload de uma nova mídia" />
        </CampaignContainer>
      );
    case 3:
      return (
        <CampaignContainer >
          <img src={ImgGroup} alt="Atribuir Contatos" />
          <p>Contatos</p>
          <TransitionModal title="Contatos" isTable={true} />
        </CampaignContainer>
      );
    case 4:
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
            <input />
            <TransitionModal isTable={true} />
          </CampaignContainer>
        </Fragment>
      );

    case 5:
      return (
        <CampaignContainer >
          <img src={imgCalendar} alt="Agendar envio" />
          <p>Agendar Envio</p>
          <input type="date" />
        </CampaignContainer>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function Campaign() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
              <div>{getStepContent(activeStep)}</div>
              <Buttons>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Voltar
              </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Terminar' : 'Próximo'}
                  </Button>
                </div>
              </Buttons>
            </div>
          )}
      </div>
    </div>
  );
}
