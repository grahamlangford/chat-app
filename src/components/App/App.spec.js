import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import App, { SocketDiv } from '.'
import { ChatProvider } from '../../context/chatContext/chatContext'

describe('src/components/App', () => {
  const wrapper = () =>
    render(
      <ChatProvider>
        <App />
        <SocketDiv />
      </ChatProvider>
    )

  it('renders', () => {
    wrapper()
  })

  it('renders an AppBar with title: Chat App', () => {
    const { getByTestId } = wrapper()
    const appbar = getByTestId('app-bar')

    expect(appbar).toBeVisible()
    expect(appbar.textContent).toBe('Chat App')
  })

  it('has a switch to toggle light and dark themes', () => {
    const { getByTestId } = wrapper()
    const toggle = getByTestId('theme-switch').querySelector(
      'input[type="checkbox"]'
    )

    expect(toggle.checked).toBe(true)
    fireEvent.click(toggle)
    expect(toggle.checked).toBe(false)
  })

  it('has a dialog to create a username', () => {
    const { getByText, getByLabelText } = wrapper()
    const dialog = getByText('To use this chat, please create a username.')
    const textfield = getByLabelText('Username')

    expect(dialog).toBeVisible()
    fireEvent.change(textfield, { target: { value: 'Quark' } })

    expect(textfield.value).toBe('Quark')
  })

  it('has an input field where the user can type a message', () => {
    const { getByPlaceholderText } = wrapper()
    const textfield = getByPlaceholderText('Start typing...')

    expect(textfield).toBeVisible()
    fireEvent.change(textfield, { target: { value: 'Hello World' } })
    expect(textfield.value).toBe('Hello World')
  })
})
