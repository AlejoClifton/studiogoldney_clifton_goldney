import products from './products.json';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
            reject('No se pueden cargar los productos');
        }, 2000);
    });
};

export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0]);
            reject('No se pueden cargar los productos');
        }, 2000);
    });
}