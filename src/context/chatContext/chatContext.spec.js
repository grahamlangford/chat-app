import { renderHook, act } from 'react-hooks-testing-library'
import { useChat, ChatProvider } from './chatContext'

describe('src/context/chatContext', () => {
  const wrapper = () => renderHook(() => useChat(), { wrapper: ChatProvider })

  describe('useChat', () => {
    it('setUsername adds a username to the chat state', () => {
      const { result } = wrapper()
      expect(result.current.username).toBe('')

      act(() => result.current.setUsername('Sisko'))
      expect(result.current.username).toBe('Sisko')
    })

    it('postMessage adds a message to the messages array', () => {
      const { result } = wrapper()
      expect(result.current.messages).toEqual([])

      act(() => result.current.setUsername('Sisko'))
      act(() => result.current.postMessage('Hello World'))
      expect(result.current.messages[0]).toEqual({
        username: 'Sisko',
        message: 'Hello World'
      })
    })
  })
})
