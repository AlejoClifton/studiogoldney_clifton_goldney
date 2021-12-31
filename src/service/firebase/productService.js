import { collection, getDocs, query, where, doc, getDoc, writeBatch, addDoc } from 'firebase/firestore';
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

export const getProductStock = (compra) => {
    const batch = writeBatch(db);
    const outOfStock = [];

    compra.items.forEach((item) => {
        getDoc(doc(db, 'items', item.oneProduct.id))
            .then((docSnapshot) => {
                if (docSnapshot.data().stock >= item.count) {
                    batch.update(doc(db, 'items', docSnapshot.id), { stock: docSnapshot.data().stock - item.count });
                } else {
                    outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return { outOfStock, batch };
};

export const outOfStockProduct = (compra, batch, outOfStock) => {
    if (outOfStock.length === 0) {
        return new addDoc(collection(db, 'orders'), compra)
            .then(({ id }) => {
                batch.commit()
                return id;
            })
            .catch((error) => {
                return error;
            })
    }
};
