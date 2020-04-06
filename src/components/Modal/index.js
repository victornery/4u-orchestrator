import React, { useEffect, useState, useContext, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import ClearIcon from '@material-ui/icons/Clear'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import { API_BASE } from '@utils/requests'
import { ThemeContext } from '@context'
import { transformBase64 } from '@utils/files'
import * as uuid4 from 'uuid4'

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

export default function TransitionsModal({ isMidia = false, isTable = false, title, data, setNewData }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    media: [],
    messages: [],
    list: [],
    listTest: [],
  });
  
  const context = useContext(ThemeContext);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const chooseContent = (data) => {
    switch(data) {
      case 'contacts':
      case 'campaigns':
      case 'media':
      case 'message':
      case 'message':
      case 'configs':
    }
  }

  const handleChange = async ({ target: { files }}, id) => {
    const file = files[0]
    const result = await transformBase64(file);

    return result
  }


const MediaField = ({ handleChange }) => (
  <div data-id={uuid4()}>
    <span>
      Clique aqui para adicionar uma mídia
      <small>* até 30mb</small>
    </span>
    <input
      onChange={(e) => handleChange(e, uuid4())}
      accept="image/*,application/pdf,application/msword,audio/mp3,video/mp4"
      type="file"
    />
</div>)


  useEffect(() => {
    API_BASE.get('/lists?')
  }, [])

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
                      <MediaField handleChange={handleChange} />
                      <MediaField handleChange={handleChange} />
                      <MediaField handleChange={handleChange} />
                    </LineMidia>
                    <LineMidia>
                      <MediaField handleChange={handleChange} />
                      <MediaField handleChange={handleChange} />
                      <MediaField handleChange={handleChange} />
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
