import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';

import imgProfile from '@assets/imgProfile.png'

import { Profile, Menu } from './style';


const useStyles = makeStyles({
  list: {
    width: 520,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,  
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Profile>
            <img src={imgProfile} />
						<p>Fulano de Tal</p>
						<ul>
							<li><a href="#">Configurações de Campanha</a></li>
							<li><a href="#">Configurações</a></li>
							<li><a href="#">Créditos</a></li>
							<li><a href="#">Sair</a></li>							
						</ul>
						<span>Relatar problema</span>
        </Profile>
      </List>
    </div>
  );

  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
					<Menu>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}
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
