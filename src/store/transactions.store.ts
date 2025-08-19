import { create } from 'zustand';
import transactionModel from '../models/transactions.model';
import { IItem, ITransaction, TypeOfTransaction } from '../interfaces/transaction';

interface TransactionStore {
    transactions: ITransaction[];
    recentTransactions: ITransaction[];
    sellItems: IItem[];
    buyItems: IItem[];
    loading: boolean;
    error: any;
    getTransactions: () => void;

}

const initialState = {
    transactions: [],
    recentTransactions: [],
    sellItems: [],
    buyItems: [],
    loading: false,
    error: null
}

export const useTransactionStore = create<TransactionStore>((set) => ({
    ...initialState,
    getTransactions: () => {
        set({loading: true})
        transactionModel.subscriptionToTransaction((transaction) => {
            set({recentTransactions: transaction, loading: false, sellItems: transaction.find(item => item.type === TypeOfTransaction.SALE)?.items ?? [], buyItems: transaction.find(item => item.type === TypeOfTransaction.BUY)?.items ?? [] })
        }, (error) => {
            set({error, loading: false})
        })
    }
}))