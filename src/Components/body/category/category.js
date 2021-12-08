import category from "./category.json";

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        resolve(category);
        reject("No se pueden cargar los productos");
    });
};
