
import storage from 'node-persist'
import { orders } from '../data/_orders'

export default class StorageSingleton {
    private static instance:StorageSingleton = new StorageSingleton();

    private constructor(){
        storage.init().then(() => {
            storage.setItem('orders', orders)
        })
    }

    public static getInstance():StorageSingleton {
        return this.instance
    }

    public getItem(route:string){
        return storage.getItem(route);
    }

    public setItem(route:string,value:any){
        storage.setItem(route,value);
    }
}