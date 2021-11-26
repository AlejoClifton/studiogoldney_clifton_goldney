import React from "react";

const ItemList = ({ items }) => {
    return (
        <div className="listProduct" >
            {items.map((item) => (
                <div key={item.id}>
                    <h1> {item.name} </h1>
                    <img src={item.img} alt="Imagen" />
                    <p>{item.price}</p>
                    <button>ver detalle del producto</button>
                    <p>{item.stock}</p>
                </div>))}
        </div>
    );
};

export default ItemList;
