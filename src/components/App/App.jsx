import React, { useState } from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'

import Chat from '../Chat'

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

        <Chat />
      </MuiThemeProvider>
    </div>
  )
}

export default App
