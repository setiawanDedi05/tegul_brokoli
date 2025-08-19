import firestore from '@react-native-firebase/firestore';
import { IProduct } from '../interfaces/products';

const productsCollection = firestore().collection('products');

const productModel = {
    subscriptionToProduct: (onSnapshotCallback: (products: IProduct[]) => void, onErrorCallback: (error: Error) => void) => {
        return productsCollection.onSnapshot((querySnapshot) => {
            const productList: IProduct[] = querySnapshot.docs.map((doc) => {
                return {
                    ...doc.data()
                } as IProduct;
            });
            onSnapshotCallback(productList)
        }, onErrorCallback);
    } 
}

export default productModel;