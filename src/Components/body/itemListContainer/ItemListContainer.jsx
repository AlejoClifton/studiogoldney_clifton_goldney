import "./itemListContainer.scss";
// import ItemCount from "./itemsComponents/ItemCount";
import { getProducts} from "../products/Products";
import ItemList from "./itemList/ItemList";

import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting, classItemListContainer }) => {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        const list = getProducts();

        list.then((response) => {
            setListProduct(response);
        }).catch((error) => {
            console.log(error);
        });

    }, []);

    return (
        <div className={classItemListContainer}>
            <h1>{greeting}</h1>
            {/* <ItemCount getStock={10} getInitial={1} /> */}
            <ItemList products={listProduct} />
        </div>
    );
};

export default ItemListContainer;
