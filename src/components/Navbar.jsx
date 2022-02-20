import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
  const {auth} = useContext(Context);
  const user = useAuthState(auth);

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justifyContent={'flex-end'}>
          {user[0] !== null
           ? <Button onClick={() => signOut(auth)} variant="contained" color="primary">Выйти</Button>
           : <NavLink to={LOGIN_ROUTE}><Button variant="contained" color="primary">Логин</Button></NavLink>}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar