import React, { useState } from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'

import UsernameAside from '../UsernameAside/UsernameAside'
import MessageBox from '../MessageBox'
import MessageInput from '../MessageInput'
import UsernameDialog from '../UsernameDialog'
import { lightTheme, darkTheme } from './theme'
import useStyles from './App.styles'
import { useSocket } from '../../context/chatContext/chatContext'

import useRenderCounter from '../../hooks/useRenderCounter'

export const SocketDiv = () => {
  useSocket()
  return <div />
}

const App = () => {
  const classes = useStyles()

  const [isDark, setIsDark] = useState(true)
  const [openDialog, setOpenDialog] = useState(true)

  const toggleDialog = () => setOpenDialog(!openDialog)

  const renderCount = useRenderCounter()

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" data-testid="app-bar">
              Chat App
            </Typography>
            <div className={classes.grow} />
            <Typography component="div">
              <Grid component="label" container alignItems="center">
                <Grid item>Light</Grid>
                <Grid item>
                  <Switch
                    data-testid="theme-switch"
                    checked={isDark}
                    onChange={() => setIsDark(!isDark)}
                    color="default"
                  />
                </Grid>
                <Grid item>Dark</Grid>
              </Grid>
            </Typography>
          </Toolbar>
        </AppBar>
        {renderCount}

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
      </MuiThemeProvider>
    </div>
  )
}

export default App
