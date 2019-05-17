import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { useChat } from '../../context/chatContext/chatContext'

const UsernameDialog = ({ openDialog, toggleDialog }) => {
  const [user, setUser] = useState('')
  const { setUsername } = useChat()
  const [isUsernameError, setUsernameError] = useState(false)

  const handleChange = ({ target: { value } }) => {
    if (value.trim() !== '' && isUsernameError) setUsernameError(false)
    setUser(value)
  }

  const saveUsername = () => {
    if (user.trim() === '') setUsernameError(true)
    else {
      toggleDialog()
      setUsername(user)
    }
  }

  return (
    <Dialog
      open={openDialog}
      onClose={saveUsername}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create Username</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To use this chat, please create a username.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Username"
          type="text"
          value={user}
          error={isUsernameError}
          helperText={isUsernameError ? 'Required!' : ''}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={saveUsername} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

UsernameDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired
}

export default UsernameDialog
