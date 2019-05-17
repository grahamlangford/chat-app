const socketActions = require('./actions')

const users = require('./usernames/usernames')

module.exports = io => {
  const usernames = users()

  io.on('connection', socket => {
    console.log('=======> Connected: ')

    socket.on('disconnect', () => {
      const username = usernames.getUsernames()[socket.id]
      console.log(`${username} disconnected`)

      usernames.removeUsername(socket.id)
      io.emit(socketActions.EMIT_USERNAMES, usernames.getUsernames())
      socket.broadcast.emit(socketActions.EMIT_USER_LEFT, username)
    })

    socket.on(socketActions.CLIENT_USERNAME, username => {
      usernames.setUsernames(username, socket.id)
      io.emit(socketActions.EMIT_USERNAMES, usernames.getUsernames())

      console.log(`${username} joined`)
      socket.broadcast.emit(socketActions.EMIT_NEW_USER, username)
    })

    socket.on(socketActions.CLIENT_MESSAGE, message => {
      console.log(message)
      socket.broadcast.emit(socketActions.SERVER_MESSAGE, message)
    })
  })
}
