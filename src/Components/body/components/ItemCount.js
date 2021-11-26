import React, { useState } from "react";

const ItemCount = ({ getStock, getInitial}) => {
    const [stock] = useState(getStock);
    const [count, setCount] = useState(getInitial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const onAdd = () => {
        window.alert(`¡Agregada la cantidad de ${count} productos a tu carrito!`);
    };

    return (
        <div className="itemCount">
            <p>Camisa Tiger </p>
            <div>
                <i className="fas fa-minus" onClick={handleRemove}></i>
                <span>{count}</span>
                <i className="fas fa-plus" onClick={handleAdd}></i>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
