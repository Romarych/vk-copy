import { Alert, Avatar, Fab, Grid, List, ListItem, ListItemText, TextField } from '@mui/material'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import React, { FC, MouseEvent, useEffect, useState } from 'react'
import { IMessage } from '../../../types'
import { useAuth } from '../../providers/useAuth'
import Card from '../../ui/Card'
import { Send } from '@material-ui/icons'

const Messages: FC = () => {
  const { db, user } = useAuth()
  const [messages, setMessages] = useState<IMessage[]>([])
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const addMessageHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await addDoc(collection(db, "messages"), {
        user,
        message,
        createdAt: '5 минут назад',
      });
    } catch (e: any) {
      setError(e)
    }

    setMessage('')
  }

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'messages'), doc => {
      const array: IMessage[] = []
      doc.forEach((d: any) => {
        array.push(d.data())
      })
      setMessages(array)
    })

    return () => {
      unsub()
    }

  }, [])

  return (
    <>
      {error && <Alert sx={{ marginBottom: '20px' }} severity="error">{error}</Alert>}
      <Card>
        <List style={{ height: '65vh', overflow: 'auto' }}>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <Grid 
                container 
                sx={msg.user._id === user?._id 
                ? { textAlign: 'left' } 
                : {textAlign: 'right'}}>
                <Grid item xs={12}>
                  <Grid 
                    item xs={6} 
                    sx={{ width: '100%', padding: '10px', borderRadius: '10px'}} 
                    style={msg.user._id === user?._id 
                    ? {float: 'right', color: '#5277a3', background: '#f2f2f2'} 
                    : {float: 'left', background: '#5277a3', color: '#fff'}}>
                    <Grid 
                      style={ msg.user._id === user?._id 
                      ? {float: 'right'} 
                      : {float: 'left'}} 
                      item xs={6}>
                      <Avatar 
                        style={msg.user._id === user?._id 
                        ? {float: 'right'} 
                        : {float: 'left'}} 
                        sx={{width: '30px', height: '30px'}} 
                        src={msg.user.avatar} />
                    </Grid>
                    <Grid 
                      style={msg.user._id === user?._id 
                      ? {float: 'right'} 
                      : {float: 'left'}} 
                      item xs={6}>
                      <ListItemText 
                        style={{float: 'left', marginLeft: 10, marginRight: 10}} 
                        secondary={msg.user.name} />
                    </Grid>
                    <br />
                    <ListItemText primary={msg.message} />
                    <Grid item xs={12}>
                      <ListItemText secondary={msg.createdAt} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Grid container style={{ padding: '20px' }}>
            <Grid item xs={10}>
              <TextField
                id='outlined-basic-email'
                label='Type Something'
                fullWidth
                onChange={e => setMessage(e.target.value)}
                value={message}
              />
            </Grid>
            <Grid item xs={2} sx={{ textAlign: 'center' }}>
              <Fab color='primary' onClick={addMessageHandler}>
                <Send />
              </Fab>
            </Grid>
          </Grid>
      </Card>
    </>
  )
}

export default Messages