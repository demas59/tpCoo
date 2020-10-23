import express from 'express'
import http from 'http'

export default class Server {
    public port: number | boolean;
    public app: express.Application;

    constructor(port: number | boolean, app: express.Application) {
        this.app = app;
        this.port = port
        this.app.set('port', this._normalizedPort(process.env.PORT || this.port))
        this.start();
    }

    public start(): void {
        const server = http.createServer(this.app)
        server.listen(this.port)
        server.on('listening', () => this._onListening.apply(this))
        server.on('error', (error) => this._onError(error))
    }

    protected _normalizedPort(value: any): number | boolean {
        const port = parseInt(value, 10)

        if (isNaN(port)) {
            return value
        }

        if (port >= 0) {
            return port
        }

        return false
    }

    protected _onListening(): void {
        console.log(`Listening on ${this.port}`)
    }

    protected _onError(error: any): never {
        if (error.syscall !== 'listen') {
            throw error
        }

        switch (error.code) {
            case 'EACCES':
                console.error(`${this.port} requires elevated privileges`)
                process.exit(1)
            case 'EADDRINUSE':
                console.error(`${this.port} is already in use`)
                process.exit(1)
            default:
                throw error
        }
    }
}