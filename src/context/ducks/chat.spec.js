import chatReducer, {
  types,
  setUsername,
  postMessage,
  socketTypes,
  externalMessage,
  externalUsernames,
  externalNewUser,
  externalUserLeft
} from './chat'

describe('src/context/ducks/chat.js', () => {
  describe('action creators', () => {
    it('setUsername returns { type: SET_USERNAME, payload: username }', () => {
      const { type, payload } = setUsername('John')
      expect(type).toBe(types.SET_USERNAME)
      expect(payload).toBe('John')
    })

    it('postMessage returns { type: POST_MESSAGE, payload: message }', () => {
      const { type, payload } = postMessage('Hello World')
      expect(type).toBe(types.POST_MESSAGE)
      expect(payload).toBe('Hello World')
    })

    it('externalMessage returns { type: MESSAGE_FROM_SERVER, payload: message }', () => {
      const { type, payload } = externalMessage('Hello World')
      expect(type).toBe(socketTypes.MESSAGE_FROM_SERVER)
      expect(payload).toBe('Hello World')
    })

    it('externalUsernames returns { type: USERNAMES_FROM_SERVER, payload: usernames }', () => {
      const { type, payload } = externalUsernames({
        '1234': 'Sisko',
        '2345': 'Quark'
      })

      expect(type).toBe(socketTypes.USERNAMES_FROM_SERVER)
      expect(payload).toEqual({
        '1234': 'Sisko',
        '2345': 'Quark'
      })
    })

    it('externalNewUser returns { type: NEW_USER, payload: message }', () => {
      const { type, payload } = externalNewUser('Hello World')
      expect(type).toBe(socketTypes.NEW_USER)
      expect(payload).toBe('Hello World')
    })

    it('externalUserLeft returns { type: USER_LEFT, payload: message }', () => {
      const { type, payload } = externalUserLeft('Hello World')
      expect(type).toBe(socketTypes.USER_LEFT)
      expect(payload).toBe('Hello World')
    })
  })

  describe('reducer', () => {
    it(types.SET_USERNAME, () => {
      const state = chatReducer({}, setUsername('Frank'))
      expect(state).toEqual({ username: 'Frank' })
    })

    it(types.POST_MESSAGE, () => {
      const state = chatReducer({ messages: [] }, postMessage('Hello World'))
      expect(state).toEqual({ messages: ['Hello World'] })
    })

    it(socketTypes.MESSAGE_FROM_SERVER, () => {
      const state = chatReducer({ messages: [] }, externalMessage('Make it so'))
      expect(state).toEqual({ messages: ['Make it so'] })
    })

    it(socketTypes.USERNAMES_FROM_SERVER, () => {
      const state = chatReducer(
        { users: { '4455': 'This will not last' } },
        externalUsernames({ '1234': 'Sisko', '2345': 'Quark' })
      )
      expect(state).toEqual({ users: { '1234': 'Sisko', '2345': 'Quark' } })
    })

    it(socketTypes.NEW_USER, () => {
      const state = chatReducer({ messages: [] }, externalNewUser('Janeway'))
      expect(state).toEqual({ messages: ['Janeway has entered the chat'] })
    })

    it(socketTypes.USER_LEFT, () => {
      const state = chatReducer({ messages: [] }, externalUserLeft('Kirk'))
      expect(state).toEqual({ messages: ['Kirk left the chat'] })
    })
  })
})
