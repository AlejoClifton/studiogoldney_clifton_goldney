import React, { useContext, useState } from 'react';
import './checkoutContainer.scss';

import { writeBatch, getDoc, doc, Timestamp, collection, addDoc } from 'firebase/firestore';
import { db } from '../../../service/firebase/firebase';
import CartContext from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import NotificationContext from '../../../context/NotificationContext';
import { Link } from 'react-router-dom';

const CheckoutContainer = () => {
    const { itemCart, clearItems, values, updateEmail } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);
    const [valores, setValores] = useState({ nombre: '', apellido: '', telefono: '', email: '' });
    const [ProccessingOrder, setProccessingOrder] = useState(false);
    const navigate = useNavigate();

    const batch = writeBatch(db);
    const outOfStock = [];

    const llenarFormulario = (e) => {
        const { name, value } = e.target;
        setValores({
            ...valores,
            [name]: value,
        });
    };

    const checkout = (e) => {
        e.preventDefault();

        const compra = {
            buyer: { nombre: valores.nombre, apellido: valores.apellido, phone: valores.telefono, email: valores.email },
            items: itemCart,
            total: values.total,
            date: Timestamp.fromDate(new Date()),
        };

        compra.items.forEach((item) => {
            getDoc(doc(db, 'items', item.oneProduct.id))
                .then((docSnapshot) => {
                    if (docSnapshot.data().stock >= item.count) {
                        batch.update(doc(db, 'items', docSnapshot.id), { stock: docSnapshot.data().stock - item.count });
                    } else {
                        outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        });

        if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), compra)
                .then(({ id }) => {
                    batch.commit().then(() => {
                        setNotification('succes', 'Su orden es: ' + id);
                    });
                })
                .catch((error) => {
                    setNotification('error', 'Error ejecutando la orden' + error);
                })
                .finally(() => {
                    updateEmail(compra.buyer.email);
                    setTimeout(() => {
                        navigate('/dashboard');
                        clearItems();
                    }, 4000);
                    setProccessingOrder(true);
                });
        }
    };

    return (
        <div className="checkoutContainer">
            {itemCart.length > 0 ? (
                <div>
                    {!ProccessingOrder ? (
                        <form method="post" onSubmit={checkout}>
                            <h1>Ingresar Datos</h1>
                            <div className="containerText">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name="nombre"
                                    id="nombre"
                                    required
                                    onChange={llenarFormulario}
                                />
                            </div>
                            <div className="containerText">
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    name="apellido"
                                    id="apellido"
                                    required
                                    onChange={llenarFormulario}
                                />
                            </div>
                            <div className="containerText">
                                <input type="email" placeholder="Email" name="email" id="email" required onChange={llenarFormulario} />
                            </div>
                            <div className="containerText">
                                <input
                                    type="phone"
                                    placeholder="Teléfono"
                                    name="telefono"
                                    id="telefono"
                                    required
                                    onChange={llenarFormulario}
                                />
                            </div>
                            <p>Total: ${values.total}</p>
                            <div>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    ) : (
                        <h1>Será redirigido al Dashboard</h1>
                    )}
                </div>
            ) : (
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/">
                        <button className="buttonCart">Volver a la tienda</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CheckoutContainer;
