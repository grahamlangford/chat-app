const users = require('./usernames')

describe('src/usernames.js', () => {
  const usernames = users()

  it('getUsernames returns and empty array', () => {
    expect(usernames.getUsernames()).toEqual({})
  })

  it('setUsernames updates usernames with new users', () => {
    usernames.setUsernames('Janeway', '1234')
    expect(usernames.getUsernames()).toEqual({
      '1234': 'Janeway'
    })
  })

  it('setUsernames updates usernames with new users, replacing ones with the same id', () => {
    usernames.setUsernames('Sisko', '1234')
    usernames.setUsernames('Picard', '2345')
    expect(usernames.getUsernames()).toEqual({
      '1234': 'Sisko',
      '2345': 'Picard'
    })
  })

  it('removeUsername deletes a username from the object', () => {
    usernames.removeUsername('2345')
    expect(usernames.getUsernames()).toEqual({ '1234': 'Sisko' })
  })
})
