import React, { useContext } from 'react';
import CartContext from '../../../context/CartContext';
import ItemsCartList from './ItemCartList/ItemsCartList';
import { Link } from 'react-router-dom';
import NotificationContext from '../../../context/NotificationContext';

import './cartViewContainer.scss';

const CartViewContainer = () => {
    const { itemCart } = useContext(CartContext);
    const { clearItems, values } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const checkout = () => {
        setNotification('succes', `¡Finalizaste tu compra! ¡compraste ${values.quantity} productos a $${values.total}!`);
    };

    return (
        <div className="containerCart">
            {itemCart.length !== 0 ? (
                <div>
                    <button className="buttonCart" onClick={clearItems}>
                        Borrar todos los items
                    </button>
                    <ItemsCartList items={itemCart} total={values.total} />
                    <Link to="/checkout" onClick={checkout}>
                        <button className="buttonCartEnd">Terminar Compra</button>
                    </Link>
                </div>
            ) : (
                <div className="listNotCart">
                    <Link to="/">
                        <button className="buttonCart">Volver a la tienda</button>
                    </Link>
                    <h2>Tu carrito está vacío</h2>
                    <h3>¿No sabés qué comprar? ¡Miles de productos te esperan!</h3>
                </div>
            )}
        </div>
    );
};

export default CartViewContainer;
