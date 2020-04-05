import React, { useContext } from 'react';
import { Button, List, SwipeableDrawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import imgProfile from '@assets/imgProfile.png'
import { Profile, Menu } from './style';
import { useHistory } from 'react-router-dom'
import { ThemeContext } from '@context'
import { logoffUser } from '@context/actions'

const Drawer = () => {
  const history = useHistory();
  const context = useContext(ThemeContext)

  const [state, setState] = React.useState({
    left: false,
  });

  const swipeableTo = 'left'

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{ 
        minWidth: 520
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Profile>
            <img src={imgProfile} alt="Foto de Perfil" />
						<p>{ context && context.user && context.user.fullname ? `${context.user.fullname}` : 'Usuário' }</p>
						<ul>
							<li><Link to="#">Configurações de Campanha</Link></li>
							<li><Link to="#">Configurações</Link></li>
							<li><Link to="#">Créditos</Link></li>
							<li><Link onClick={() => logoffUser(context, history)}>Sair</Link></li>
						</ul>
						<span>Relatar problema</span>
        </Profile>
      </List>
    </div>
  );

  return (
    <div>
      {[swipeableTo].map((anchor) => (
        <React.Fragment key={anchor}>
					<Menu>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon/>
            </Button>
					</Menu>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Drawer