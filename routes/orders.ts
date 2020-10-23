import { Router, Request, Response } from 'express'
import storage from 'node-persist'
import OrderController from '../controller/orderController'

const controller = new OrderController();
const router = Router()

router.get('/', async (req: Request, res: Response) => controller.getAll(req,res))

router.get('/:id', async (req: Request, res: Response) => controller.getById(req,res))

router.post('/', async (req: Request, res: Response) => controller.postOrder(req,res))

export default router