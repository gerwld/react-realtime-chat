import { Box, Button, Container, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { Context } from '..'
import firebase from 'firebase/compat/app'

const Login = () => {
  const {auth} = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
  }

  return (
    <Container>
      <Grid container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}>
        <Grid style={{ width: '400px', background: 'lightgray' }}
              container 
              alignItems='center' 
              justifyContent='center'>
          <Box p={6}>
            <Button onClick={login} variant="outlined">Войти с помощью google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login