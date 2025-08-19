export interface DateTransaction {
    _seconds: number;
    _nanoSeconds: number;
}

export enum TypeOfTransaction {
    SALE = "sale",
    BUY = "buy"
}

export interface IItem {
    id: string;
    qty: number;
    total_amount: number;
}

export interface ITransaction {
    date: DateTransaction;
    desc: string;
    id: string;
    invoice_number: string;
    items: IItem[];
    total_amount: number;
    type: TypeOfTransaction;
}