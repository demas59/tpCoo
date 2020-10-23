import { Request, Response } from 'express'

export default class indexController{
    getHello(req: Request, res: Response){
        res.send('Hello World !')
    }

    getFavicon(req: Request, res: Response){
        res.status(204)
    }
}