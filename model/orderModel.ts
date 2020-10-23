import Order from '../types'
import storage from '../classes/Storage'

export default class OrderModel{
    getOrders():Promise<Order[]>{
        return storage.getItem('orders')
    }

    setOrder(orders:Order[]){
        storage.setItem('orders', orders)
    }
}