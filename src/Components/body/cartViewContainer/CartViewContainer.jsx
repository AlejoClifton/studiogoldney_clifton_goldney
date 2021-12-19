import React, { useContext } from 'react';
import CartContext from '../../../context/CartContext';
import ItemsCartList from './ItemCartList/ItemsCartList';
import { Link } from 'react-router-dom';

import './cartViewContainer.scss';

const CartViewContainer = () => {
    const { itemCart } = useContext(CartContext);
    const { clearItems, values } = useContext(CartContext);

    const checkout = () => {
        alert(`¡Finalizaste tu compra! ¡compraste ${values.quantity} productos a $${values.total}!`);
    }
    
    return (
        <div className="container">
            {itemCart.length !== 0 ? (
                <div>
                    <button className="buttonCart" onClick={clearItems}>
                        Borrar todos los items
                    </button>
                    <ItemsCartList items={itemCart} />
                    <ul className="priceTotal">
                        <li>Total:</li>
                        <li>{values.quantity}</li>
                        <li>${values.total}</li>
                    </ul>
                    <button className="buttonCartEnd" onClick={checkout}>Terminar Compra</button>
                </div>
            ) : (
                <div className="listNotCart">
                    <Link to="/"><button className="buttonCart">Volver a la tienda</button></Link>
                    <h2>Tu carrito está vacío</h2>
                    <h3>¿No sabés qué comprar? ¡Miles de productos te esperan!</h3>
                </div>
            )}
        </div>
    );
};

export default CartViewContainer;
