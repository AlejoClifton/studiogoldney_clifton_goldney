import React from "react";
import Item from "./Item";
import "./itemList.scss";
import "../../../../global/loader.scss";

const ItemList = ({ products }) => {
    return (
        <div className="listProduct">
        {products.length !== 0 ? (
            products.map((item) => (
                <Item key={item.id} product={item} />
            ))
            ):(<div className="lds-facebook"><div></div><div></div><div></div></div>)}
        </div>
    );
};

export default ItemList;
