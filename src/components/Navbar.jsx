import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
  const user = false;
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justifyContent={'flex-end'}>
          {user 
           ? <Button variant="contained" color="primary">Выйти</Button>
           : <NavLink to={LOGIN_ROUTE}><Button variant="contained" color="primary">Логин</Button></NavLink>}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar