const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const http = require('http')
const socketIO = require('socket.io')
const socket = require('./sockets/socket')

const port = process.env.PORT || 4000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({ origin: true }))

app.use('/', express.static(path.join(__dirname, '../build')))

const server = http.createServer(app)

socket(socketIO(server))

server.listen(port, () => console.log(`Server listening on port ${port}`))

module.exports = server
