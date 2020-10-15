#!/usr/bin/env node

import app from './app'
import http from 'http'

const port = normalizePort(process.env.PORT || 1234)
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(val: any): number | boolean {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

function onError(error: any): never {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

function onListening(): void {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr!.port}`
  console.log(`Listening on ${bind}`)
}
