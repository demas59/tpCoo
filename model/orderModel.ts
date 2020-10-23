import Order from '../types'
import StorageSingleton from '../classes/StorageSingleton'

const storage = StorageSingleton.getInstance();

export default class OrderModel{
    getOrders():Promise<Order[]>{
        return storage.getItem('orders')
    }

    setOrder(orders:Order[]){
        storage.setItem('orders', orders)
    }
}