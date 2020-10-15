import { Router, Request, Response } from 'express'
import storage from 'node-persist'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const orders = await storage.getItem('orders')
  res.json(orders)
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  const orders = await storage.getItem('orders')
  const result = orders.find((order: any) => order.id === parseInt(id, 10))

  if (!result) {
    return res.status(404)
  }

  return res.json(result)
})

export default router