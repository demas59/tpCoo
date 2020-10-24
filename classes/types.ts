export default interface Order {
    id: number;
    packages: Package[];
    delivery: Delivery
}

interface Delivery {
    storePickingInterval: Interval;
    deliveryInterval: Interval;
    contact: Contact;
    carrier: Carrier;
}

interface Carrier {
    name: string;
}

interface Interval {
    start: string;
    end: string;
}

export interface Contact {
    fullname: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    city: string;
}

interface Package {
    length: Mesure;
    width: Mesure;
    height: Mesure;
    weight: Mesure;
    products: Product[];
}

interface Mesure {
    unit: string;
    value: number;
}

interface Product {
    name: string;
    price: Monetary;
}

interface Monetary {
    currency: string;
    value: number;
}