import React, { useRef } from 'react'
import shortid from 'shortid'
import classNames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import useStyles from './MessageBox.styles'
import { useChat } from '../../context/chatContext/chatContext'
import useWindowSize from '../../hooks/useWindowSize'
import useRenderCounter from '../../hooks/useRenderCounter'

const MessageBox = () => {
  const classes = useStyles()
  const scrollbar = useRef(null)
  const { messages } = useChat()
  const { height } = useWindowSize()
  const renderCount = useRenderCounter()

  const scrollToBottom = () => scrollbar.current.scrollToBottom()
  return (
    <Grid
      container
      spacing={0}
      className={classes.messageBox}
      justify="space-between"
      data-testid="message-box"
    >
      {renderCount}

      <Scrollbars
        ref={scrollbar}
        autoHeight
        autoHeightMin={100}
        autoHeightMax={height / 2}
        onUpdate={scrollToBottom}
      >
        {messages.map(message => (
          <Paper key={shortid.generate()} className={classes.message}>
            <Grid item key={shortid.generate()} className={classes.width100}>
              {typeof message === 'object' ? (
                <Typography
                  variant="body1"
                  className={classNames(classes.flex, classes.whiteSpace)}
                >
                  {`${message.username}:`}
                  <span className={classes.grow} />
                  {message.message}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.whiteSpace}
                >
                  {message}
                </Typography>
              )}
            </Grid>
          </Paper>
        ))}
      </Scrollbars>
    </Grid>
  )
}

export default MessageBox
