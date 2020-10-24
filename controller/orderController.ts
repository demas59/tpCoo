import { Request, Response } from "express";
import OrderModel from "../model/orderModel";
import Order from "../classes/types";
import AdapteurContact from "../classes/AdapteurContact";

const model = new OrderModel();

export default class orderController {
  async getAll(req: Request, res: Response) {
    const orders: Order[] = await model.getOrders();
    orders.map((order) => {
      order.delivery.contact = new AdapteurContact();
    });
    res.json(orders);
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    const orders: Order[] = await model.getOrders();
    const result = orders.find((order: Order) => order.id === parseInt(id, 10));

    if (!result) {
      return res.sendStatus(404);
    }

    res.json(result);
  }

  async postOrder(req: Request, res: Response) {
    const payload = req.body;

    const orders: Order[] = await model.getOrders();
    const alreadyExists = orders.find(
      (order: Order) => order.id === payload.id
    );

    if (alreadyExists) {
      return res.sendStatus(409);
    }

    orders.push(payload);

    await model.setOrder(orders);

    res.sendStatus(201);
  }
}
