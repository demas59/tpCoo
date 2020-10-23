import {Contact} from '../types';

export default class AdapteurContact implements Contact{
    fullname: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    city: string;

    constructor(){
        this.fullname = 'secret'
        this.email = 'secret'
        this.phone = 'secret'
        this.address = 'secret'
        this.postalCode= 'secret'
        this.city = 'secret'
    }
}