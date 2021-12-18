import { useState } from 'react';

const ItemCount = ({ getStock, getInitial, onAdd }) => {
    const [stock] = useState(getStock);
    const [count, setCount] = useState(getInitial);

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
    const add = () => {onAdd(count)};
    return (
        <div className="itemCount">
                <div>
                    <div>
                        <i className="fas fa-minus" onClick={handleRemove}></i>
                        <span>{count}</span>
                        <i className="fas fa-plus" onClick={handleAdd}></i>
                    </div>
                    <button className="buttonLink" onClick={add}>Agregar al Carrito</button>
                </div>
        </div>
    );
};

export default ItemCount;
