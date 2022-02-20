import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app'
import { Context } from '..';
import Loader from './Loader';

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'));

  const sendHandler = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('');
  }

  if(loading) return <Loader/>
  return (
    <Container>
      <Grid container
        style={{ height: window.innerHeight - 50 }}
        justifyContent="center">
        <div style={{ width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'scroll' }}>
          {messages.map(mess => {
            return (
              <div key={mess.createdAt} style={{marginTop: '5px', padding: '7px', border: user.uid === mess.uid ? '2px solid teal' : '2px solid gray'}}>
                <Grid container>
                  <Avatar src={mess.photoURL}/>
                  <div>{mess.displayName}</div>
                </Grid>
                  <div>{mess.text}</div>
              </div>
            )
          })}
        </div>
        <Grid container
          direction='column'
          alignItems="flex-end"
          style={{ width: '80%' }}>
          <TextField fullWidth 
          maxRows={2} 
          variant="outlined"
          value={value}
          onChange={e => setValue(e.target.value) } />
          <Button onClick={sendHandler} variant="outlined">Отправить</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat