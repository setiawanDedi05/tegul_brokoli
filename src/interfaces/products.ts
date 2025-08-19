enum Unit {
    KG = 'kg',
}

export interface IProduct {
    price: number;
    product_name: string;
    unit: Unit
}