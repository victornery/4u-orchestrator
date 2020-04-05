import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import ClearIcon from '@material-ui/icons/Clear';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import { ModalContent, InputModal, LineMidia, HeadModal } from './style'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 6, 5),
    borderRadius: '5px',
  },
}));

export default function TransitionsModal({ isMidia = false, isTable = false, title }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <InputModal type="button" onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ModalContent>
              {
                !!isTable && (
                  <Fragment>
                    <HeadModal>
                      <ClearIcon onClick={handleClose} />
                      <SearchOutlinedIcon />
                    </HeadModal>
                    <h1>{title}</h1>
                    <table>
                      <tr>
                        <th>Lista</th>
                        <th>Contatos</th>
                        <th>Último envio</th>
                      </tr>
                      <tr>
                        <td>Nome da Lista</td>
                        <td>1890 (1760 válidos)</td>
                        <td>31/03/2020</td>
                      </tr>
                      <tr>
                        <td>Nome da Lista</td>
                        <td>1890 (1760 válidos)</td>
                        <td>31/03/2020</td>
                      </tr>
                    </table>
                  </Fragment>
                )}
              {
                !!isMidia && (
                  <Fragment>
                    <HeadModal>
                      <ClearIcon onClick={handleClose} />
                      <SearchOutlinedIcon />
                    </HeadModal>
                    <h1>{title}</h1>
                    <LineMidia>
                      <div></div>
                      <div></div>
                      <div></div>
                    </LineMidia>
                    <LineMidia >
                      <div></div>
                      <div></div>
                      <div></div>
                    </LineMidia>
                    <p>Concluir</p>
                  </Fragment>
                )}
            </ModalContent>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
