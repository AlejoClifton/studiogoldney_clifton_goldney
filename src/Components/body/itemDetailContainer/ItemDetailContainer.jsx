import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getItemById } from "../products/Products";
import ItemDetail from "./itemDetails/ItemDetail";
import "./itemDetailContainer.scss";

const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState([]);
    const { paramId } = useParams();

    useEffect(() => {
        const listOneProduct = getItemById(paramId);

        listOneProduct
            .then((response) => {
                setOneProduct(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [paramId]);

    return (
        <div className="itemDetailContainer">
            <ItemDetail product={oneProduct} />
        </div>
    );
};

export default ItemDetailContainer;
