import io from 'socket.io-client'

export const socket =
  process.env.NODE_ENV !== 'production' ? io('http://localhost:4000') : io()

export const types = {
  SET_USERNAME: 'SET_USERNAME',
  POST_MESSAGE: 'POST_MESSAGE'
}

export const socketTypes = {
  MESSAGE_FROM_SERVER: 'MESSAGE_FROM_SERVER',
  CLIENT_MESSAGE: 'CLIENT_MESSAGE',
  CLIENT_USERNAME: 'CLIENT_USERNAME',
  USERNAMES_FROM_SERVER: 'USERNAMES_FROM_SERVER',
  NEW_USER: 'NEW_USER',
  USER_LEFT: 'USER_LEFT'
}

export const initialState = {
  username: '',
  messages: [],
  users: {}
}

// local types
export const setUsername = username => ({
  type: types.SET_USERNAME,
  payload: username
})

export const postMessage = message => ({
  type: types.POST_MESSAGE,
  payload: message
})

// socket types
export const externalMessage = message => ({
  type: socketTypes.MESSAGE_FROM_SERVER,
  payload: message
})

export const sendMessageToServer = message => {
  socket.emit(socketTypes.CLIENT_MESSAGE, message)
}

export const sendUsernameToServer = username => {
  socket.emit(socketTypes.CLIENT_USERNAME, username)
}

export const externalUsernames = usernames => ({
  type: socketTypes.USERNAMES_FROM_SERVER,
  payload: usernames
})

export const externalNewUser = username => ({
  type: socketTypes.NEW_USER,
  payload: username
})

export const externalUserLeft = username => ({
  type: socketTypes.USER_LEFT,
  payload: username
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERNAME:
      sendUsernameToServer(action.payload)
      return { ...state, username: action.payload }

    case types.POST_MESSAGE:
      sendMessageToServer(action.payload)
      return { ...state, messages: [...state.messages, action.payload] }

    case socketTypes.MESSAGE_FROM_SERVER:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }

    case socketTypes.USERNAMES_FROM_SERVER:
      return {
        ...state,
        users: action.payload
      }

    case socketTypes.NEW_USER:
      return {
        ...state,
        messages: [...state.messages, `${action.payload} has entered the chat`]
      }

    case socketTypes.USER_LEFT:
      return {
        ...state,
        messages: [...state.messages, `${action.payload} left the chat`]
      }

    default: {
      throw new Error('Invalid dispatch type')
    }
  }
}
