import { Container, Grid } from '@material-ui/core'
import React from 'react'

const Loader = () => {
  return (
    <div>
      <Container>
        <Grid container
          style={{ height: window.innerHeight - 50 }}
          alignItems={'center'}
          justifyContent={'center'}>
          <Grid 
            container
            alignItems='center'
            justifyContent='center'>
            <div className="lds-dual-ring"></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Loader