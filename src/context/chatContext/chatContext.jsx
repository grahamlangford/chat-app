import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  useEffect
} from 'react'

import chatReducer, {
  setUsername as setName,
  postMessage as postMsg,
  initialState,
  externalMessage,
  socket,
  externalUsernames,
  externalNewUser,
  externalUserLeft
} from '../ducks/chat'

const ChatContext = createContext()

export const serverTypes = {
  SERVER_MESSAGE: 'SERVER_MESSAGE',
  EMIT_USERNAMES: 'EMIT_USERNAMES',
  EMIT_NEW_USER: 'EMIT_NEW_USER',
  EMIT_USER_LEFT: 'EMIT_USER_LEFT'
}

export const useChat = () => {
  const context = useContext(ChatContext)

  if (!context) throw new Error('useChat must be used within a ChatProvider')

  const [state, dispatch] = context
  const { username, messages, users } = state
  const setUsername = useCallback(name => dispatch(setName(name)), [dispatch])
  const postMessage = useCallback(
    message => dispatch(postMsg({ username, message })),
    [dispatch, username]
  )

  return { username, setUsername, messages, postMessage, users }
}

export const useSocket = () => {
  const context = useContext(ChatContext)

  if (!context) throw new Error('useSocket must be used within a ChatProvider')

  const [, dispatch] = context

  useEffect(() => {
    socket.on(serverTypes.SERVER_MESSAGE, message => {
      dispatch(externalMessage(message))
    })

    socket.on(serverTypes.EMIT_USERNAMES, usernames => {
      dispatch(externalUsernames(usernames))
    })

    socket.on(serverTypes.EMIT_NEW_USER, username => {
      dispatch(externalNewUser(username))
    })

    socket.on(serverTypes.EMIT_USER_LEFT, username => {
      dispatch(externalUserLeft(username))
    })
  }, [dispatch])
}

export const ChatProvider = props => {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  const value = useMemo(() => [state, dispatch], [state])

  return <ChatContext.Provider value={value} {...props} />
}
