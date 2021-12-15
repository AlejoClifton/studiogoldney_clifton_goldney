import React, { useContext } from 'react';
import './ItemsCartList.scss';
import ItemCart from './ItemCart';
import CartContext from '../../../../context/CartContext';
import {Link} from 'react-router-dom';

export const ItemsCartList = ({ items }) => {
    const { clearItems } = useContext(CartContext);
    return (
        <div className="listCartProduct">
            <button className="buttonDelete" onClick={clearItems}>
                Borrar todos los items
            </button>
            {items.length !== 0 ? (
                items.map((item) => (
                    <ItemCart key={item.getProduct.id} item={item.getProduct} count={item.count} />
                ))
            ) : (
                <div className="listNotCart">
                    <h2>Tu carrito está vacío</h2>
                    <h3>¿No sabés qué comprar? ¡Miles de productos te esperan!</h3>
                    <Link to="/"><button className="buttonBack">Volver a la tienda</button></Link>
                </div>
            )}
        </div>
    );
};

export default ItemsCartList;
