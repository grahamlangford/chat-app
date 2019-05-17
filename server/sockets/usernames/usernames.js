module.exports = () => {
  const usernames = {}

  return {
    getUsernames: () => usernames,
    setUsernames: (username, id) => {
      usernames[id] = username
    },
    removeUsername: id => {
      delete usernames[id]
    }
  }
}
