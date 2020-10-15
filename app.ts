import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import storage from 'node-persist'

import indexRouter from './routes/index'
import ordersRouter from './routes/orders'

import { orders } from './data/_orders'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Init default data
storage.init().then(() => {
  storage.setItem('orders', orders)
})

app.use('/', indexRouter)
app.use('/orders', ordersRouter)

export default app