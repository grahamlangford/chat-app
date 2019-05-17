import chatReducer, { types, setUsername, postMessage } from './chat'

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
  })

  describe('reducer', () => {
    it(types.SET_USERNAME, () => {
      const state = chatReducer({}, setUsername('Frank'))
      expect(state).toEqual({ username: 'Frank' })
    })

    it('types.POST_MESSAGE', () => {
      const state = chatReducer({ messages: [] }, postMessage('Hello World'))
      expect(state).toEqual({ messages: ['Hello World'] })
    })
  })
})
