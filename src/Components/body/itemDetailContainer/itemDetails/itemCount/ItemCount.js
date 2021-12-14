import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './itemCount.scss';

const ItemCount = ({ getStock, getInitial, getName }) => {
    const [stock] = useState(getStock);
    const [count, setCount] = useState(getInitial);
    const [purchase, setPurchase] = useState(false);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const onAdd = () => {
        if (count > 0) {
            window.alert(`¡Agregada la cantidad de ${count} de ${getName} a tu carrito!`);
            setPurchase(true);
        }
        else {
            window.alert(`¡No seleccionaste ningún artículo de ${getName} a tu carrito!`);
        }
    };

    return (
        <div className="itemCount">
            {!purchase ? (
                <div>
                    <div>
                        <i className="fas fa-minus" onClick={handleRemove}></i>
                        <span>{count}</span>
                        <i className="fas fa-plus" onClick={handleAdd}></i>
                    </div>
                    <button onClick={onAdd}>Agregar al Carrito</button>
                </div>
            ) : (
                <div>
                    <button><Link to={"/"}>Seleccionar otro Artículo</Link></button>
                    <button><Link to={"/cart"}>Ir al Carrito</Link></button>
                </div>
            )}
        </ div>
    );
};

export default ItemCount;
