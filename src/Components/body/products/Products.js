import products from "./products.json";

export const getItemById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find(
            (prod) => parseInt(prod.id) === parseInt(id)
        );
        setTimeout(() => {
            resolve(product);
            reject("No se pueden cargar los productos");
        }, 2000);
    });
};

export const getCategories = (id = "") => {
    if (id !== "") {
        return new Promise((resolve, reject) => {
            const product = products.filter(
                (prod) => parseInt(prod.categoryId) === parseInt(id)
            );
            setTimeout(() => {
                resolve(product);
                reject("No se pueden cargar los productos");
            }, 500);
        });
    } else {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                    reject("No se pueden cargar los productos");
                }, 1000);
        });
    }
};

// export const getCategories = (id = "") => {
//     if (id !== "") {
//         return new Promise((resolve, reject) => {
//             const product = products.filter(
//                 (prod) => parseInt(prod.categoryId) === parseInt(id)
//             );
//             resolve(product);
//             reject("No se pueden cargar los productos");
//         });
//     } else {
//         return new Promise((resolve, reject) => {
//             resolve(products);
//             reject("No se pueden cargar los productos");
//         });
//     }
// };