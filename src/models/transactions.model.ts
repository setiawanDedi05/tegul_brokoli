import firestore from '@react-native-firebase/firestore';
import { ITransaction } from '../interfaces/transaction';

const transactionsCollection = firestore().collection('transactions');

const transactionModel = {
    subscriptionToTransaction: (onSnapshotCallback: (transactions: ITransaction[]) => void, onErrorCallback: (transactions: Error) => void) => {
        return transactionsCollection.orderBy('date', 'desc').limit(10).onSnapshot((querySnapshot) => {
            const transactionList: ITransaction[] = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                } as ITransaction;
            });
            onSnapshotCallback(transactionList)
        }, onErrorCallback);
    } 
}

export default transactionModel;