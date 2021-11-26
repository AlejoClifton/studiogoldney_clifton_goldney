import "./body.scss";
import ItemCount from "./components/ItemCount";
import Item from "./components/Item";
import ItemList from "./components/ItemList";

import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting, classItemListContainer }) => {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        const list = Item();

        list.then((response) => {
            setListProduct(response);
        });
    }, []);

    return (
        <div className={classItemListContainer}>
            <h1>{greeting}</h1>
            <ItemCount getStock={10} getInitial={1} />
            <ItemList items={listProduct} />
        </div>
    );
};

export default ItemListContainer;
