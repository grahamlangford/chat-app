import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'

import UsernameAside from '../UsernameAside/UsernameAside'
import MessageBox from '../MessageBox'
import MessageInput from '../MessageInput'
import UsernameDialog from '../UsernameDialog'

import useStyles from './Chat.styles'

const Chat = () => {
  const classes = useStyles()
  const [openDialog, setOpenDialog] = useState(true)

  const toggleDialog = () => setOpenDialog(!openDialog)

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        spacing={0}
        className={classes.container}
      >
        <Grid item xs={12} sm={10} md={3}>
          <UsernameAside />
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Grid
            container
            alignItems="flex-start"
            justify="flex-end"
            spacing={0}
          >
            <Grid item xs={12}>
              <MessageBox />
            </Grid>

            <Grid item xs={12}>
              <MessageInput />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <UsernameDialog openDialog={openDialog} toggleDialog={toggleDialog} />
    </>
  )
}

export default Chat
