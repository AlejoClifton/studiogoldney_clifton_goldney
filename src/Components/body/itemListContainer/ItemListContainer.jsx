import "./itemListContainer.scss";
import { getCategory } from "../products/products";
import ItemList from "./itemList/ItemList";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting, classItemListContainer }) => {
    const [listProduct, setListProduct] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const list = getCategory(categoryId);

        list.then((response) => {
            setListProduct(response);
        }).catch((error) => {
            console.log(error);
        });
    }, [categoryId]);

    return (
        <div className={classItemListContainer}>
            <h1>{greeting}</h1>
            <ItemList products={listProduct} />
        </div>
    );
};

export default ItemListContainer;
