import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  res.send('Hello World !')
})

router.get('/favicon.ico', (req: Request, res: Response) => res.status(204))

export default router