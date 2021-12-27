import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = (itemCollection, category = '') => {
    if (category === '') {
        return new getDocs(collection(db, itemCollection))
            .then((QuerySnapshot) => {
                const products = QuerySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                return products;
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        return new getDocs(query(collection(db, itemCollection), where('categoryId', '==', category)))
            .then((QuerySnapshot) => {
                const products = QuerySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                return products;
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const getProductById = (itemCollection, parameter) => {
    return new getDoc(doc(db, itemCollection, parameter))
        .then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() };
            return product;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getOrders = (itemCollection) => {
    return new getDocs(collection(db, itemCollection))
        .then((QuerySnapshot) => {
            const products = QuerySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            return products;
        })
        .catch((error) => {
            console.log(error);
        });
};
