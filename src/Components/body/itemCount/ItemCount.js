import React, { useState } from "react";
import './itemCount.scss';

const ItemCount = ({ getStock, getInitial, getName}) => {
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
        window.alert(`¡Agregada la cantidad de ${count} de ${getName} a tu carrito!`);
    };

    return (
        <div className="itemCount">
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
