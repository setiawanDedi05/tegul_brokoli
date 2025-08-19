import { create } from 'zustand';
import transactionModel from '../models/transactions.model';
import { TypeOfTransaction } from '../interfaces/transaction';
import { IProduct } from '../interfaces/products';
import productModel from '../models/product.model';

interface ProductStoreState {
    products: IProduct[];
    selectedProducts: IProduct[];
    loading: boolean;
    error: any;
    getProducts: () => void;
    addSelectedProduct: (product: IProduct) => void

}

const initialState = {
    products: [],
    selectedProducts: [],
    loading: false,
    error: null
}

export const useProductStore = create<ProductStoreState>((set, get) => ({
    ...initialState,
    getProducts: () => {
        set({loading: true})
        productModel.subscriptionToProduct((products) => {
            console.log({products})
            set({products: products, loading: false})
        }, (error) => {
            set({error, loading: false})
        })
    },
    addSelectedProduct: (product) => {
        set({selectedProducts: [...get().selectedProducts, product] })
    }
}))