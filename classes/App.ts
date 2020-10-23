import express from 'express'
import logger from 'morgan'
import path from 'path'
import cookieParser from 'cookie-parser'
import indexRouter from '../routes/index'
import ordersRouter from '../routes/orders'

export default class App {

    private instance: express.Application;

    constructor(instance: express.Application) {
        this.instance = instance
        this._registerMiddlewares();
        this._registerRoutes();
    }

    private _registerMiddlewares(): void {
            this.instance.use(logger('dev'))
            this.instance.use(express.json())
            this.instance.use(express.urlencoded({ extended: false }))
            this.instance.use(cookieParser())
            this.instance.use(express.static(path.join(__dirname, 'public')))
    }

    private _registerRoutes(): void {
            this.instance.use('/', indexRouter)
            this.instance.use('/orders', ordersRouter)
    }

    public get getInstance(): express.Application{
        return this.instance;
    }
}