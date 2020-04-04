import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import { ModalContent } from './style'

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

export default function TransitionsModal() {
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
      <button type="button" onClick={handleOpen}>
        modal
      </button>
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
              <SearchOutlinedIcon />
              <h1>Contatos</h1>                
              <table id="customers">
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
            </ModalContent>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
