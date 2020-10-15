#!/usr/bin/env node

import app from './app'
import http from 'http'

const port = normalizePort(process.env.PORT || 1234)
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(value: any): number | boolean {
  const port = parseInt(value, 10)

  if (isNaN(port)) {
    return value
  }

  if (port >= 0) {
    return port
  }

  return false
}

function onError(error: any): never {
  if (error.syscall !== 'listen') {
    throw error
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`${port} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${port} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

function onListening(): void {
  console.log(`Listening on ${port}`)
}
