
import storage from 'node-persist'
import { orders } from '../data/_orders'

export default class Storage {

    public constructor(type:string){

        let initData : any;
        switch (type){
            case 'orders': initData = orders;
            break; 
        }

        storage.init().then(() => {
            storage.setItem(type, initData)
        })
    }

    public static getItem(route:string){
        return storage.getItem(route);
    }

    public static setItem(route:string,value:any){
        storage.setItem(route,value);
    }
}