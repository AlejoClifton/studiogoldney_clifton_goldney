import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import ItemCount from '../itemCount/ItemCount';
import CartContext from '../../../../context/CartContext';
import NotificationContext from '../../../../context/NotificationContext';

const ItemDetail = ({ item }) => {
    const { addItemCart } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const [purchase, setPurchase] = useState(false);

    const onAdd = (count) => {
        let itemCart = addItemCart({ item, count });

        if (itemCart) {
            setNotification('succes', `¡Agregada la cantidad de ${count} de ${item.name} a tu carrito!`);
            setPurchase(true);
        } else {
            setNotification('error', `¡Ingresaste más productos del stock permitido!`);
            setPurchase(false);
        }
    };

    return (
        <div>
            <h1 className="title">Producto Seleccionado</h1>
            <h2> {item.name} </h2>
            <div className="containerDetail">
                <img src={item.img} alt="Imagen" />
                <div>
                    <p>
                        <span className="span">Descripcion:</span> {item.description}
                    </p>
                    <p>
                        <span className="span">Precio:</span> ${item.price}
                    </p>
                    <div>
                        <p>
                            <span className="span">Stock Disponible:</span> {item.stock}
                        </p>
                        {!purchase ? (
                            <ItemCount getStock={item.stock} onAdd={onAdd} getInitial={1} />
                        ) : (
                            <div className="link">
                                <div>
                                    <Link className="linkClick" to={'/'}>
                                        Seleccionar otro Artículo
                                    </Link>
                                </div>
                                <div>
                                    <Link className="linkClick" to={'/cart'}>
                                        Ir al Carrito
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
