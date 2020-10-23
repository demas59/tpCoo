import { Router, Request, Response } from 'express'
import IndexController from '../controller/indexController'

const router = Router()
const controller = new IndexController();

router.get('/', async (req: Request, res: Response) => {
  controller.getHello(req,res);
})

router.get('/favicon.ico', (req: Request, res: Response) => controller.getFavicon(req,res))

export default router