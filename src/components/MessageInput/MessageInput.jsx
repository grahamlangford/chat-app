import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { useChat } from '../../context/chatContext/chatContext'
import useStyles from './MessageInput.styles'
import useRenderCounter from '../../hooks/useRenderCounter'

const MessageInput = () => {
  const classes = useStyles()

  const [text, setText] = useState('')
  const { postMessage } = useChat()

  const handleSubmit = e => {
    e.preventDefault()
    postMessage(text)
    setText('')
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) handleSubmit(e)
  }
  const renderCount = useRenderCounter()

  return (
    <form
      data-testid="to-do-form-context"
      className={classes.form}
      onSubmit={handleSubmit}
    >
      {renderCount}

      <input type="submit" className={classes.displayNone} />
      <TextField
        id="text"
        placeholder="Start typing..."
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        fullWidth
        multiline
        variant="outlined"
        className={classes.text}
        onKeyDown={handleKeyPress}
      />
      <div className={classes.flex}>
        <div className={classes.grow} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          data-testid="submit-button"
        >
          Add
        </Button>
      </div>
    </form>
  )
}

export default MessageInput
