import {Product} from './product';
export interface Account {
    username: string;
    password: string;
    name: string;
    lastname: string;
    email: string;
}

export interface ResponseAccount {
    username :string;
    password :string;
    name :string;
    lastname :string;
    email :string;
    myProject :ResponseProject[];
    myCart :ResponsePayment[];
}
export interface ResponsePayment {
    payment : number;
    serial :string;
    expite : string;
    status : number;
}
export interface ResponseProject {
     sku : string;
     project : string;
     status : number;
     necom_schema : number;
     description :string;
     products :Product[];
}