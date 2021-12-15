import React, { useContext } from 'react';
import CartContext from '../../../../context/CartContext';

const ItemCart = ({ item, count }) => {
    const { removeItemCart } = useContext(CartContext);

    const removeItem = () => {
        removeItemCart(item.id, count);
    };

    return (
        <div>
            <div className="ItemCar">
                <img src={item.img} alt="Imagen" />
                <h1> {item.name} </h1>
                <p className="Count">{count}</p>
                <p className="Price">{item.price}</p>
                <i onClick={removeItem} class="far fa-times-circle"></i>
            </div>
        </div>
    );
};

export default ItemCart;
