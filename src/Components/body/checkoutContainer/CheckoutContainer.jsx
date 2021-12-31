import React, { useContext, useState } from 'react';
import './checkoutContainer.scss';

import { getProductStock, outOfStockProduct } from '../../../service/firebase/productService';
import CartContext from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import NotificationContext from '../../../context/NotificationContext';
import UserContext from '../../../context/UserContext';
import { Link } from 'react-router-dom';

const CheckoutContainer = () => {
    const { clearItems, getTotal, values} = useContext(CartContext);
    const { updateEmail } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);

    const [valores, setValores] = useState({ nombre: '', apellido: '', telefono: '', email: '' });
    const [ProccessingOrder, setProccessingOrder] = useState(false);
    const navigate = useNavigate();

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
            items: values.itemCart,
            total: getTotal(),
        };

        let productSotck = getProductStock(compra);

        outOfStockProduct(compra, productSotck.batch, productSotck.outOfStock)
            .then((res) => {
                setNotification('succes', 'Su orden es: ' + res);
            })
            .catch((err) => {
                setNotification('error', 'Error ejecutando la orden' + err);
            })
            .finally(() => {
                updateEmail(compra.buyer.email);
                setTimeout(() => {
                    navigate('/dashboard');
                    clearItems();
                }, 4000);
                setProccessingOrder(true);
            });
    };

    return (
        <div className="checkoutContainer">
            {values.itemCart.length > 0 ? (
                <div>
                    {!ProccessingOrder ? (
                        <form method="post" onSubmit={checkout}>
                            <h1>Ingresar Datos</h1>
                            <div className="containerText">
                                <input type="text" placeholder="Nombre" name="nombre" id="nombre" required onChange={llenarFormulario}/>
                            </div>
                            <div className="containerText">
                                <input type="text" placeholder="Apellido" name="apellido" id="apellido" required onChange={llenarFormulario}
                                />
                            </div>
                            <div className="containerText">
                                <input type="email" placeholder="Email" name="email" id="email" required onChange={llenarFormulario} />
                            </div>
                            <div className="containerText">
                                <input type="phone" placeholder="Teléfono" name="telefono" id="telefono" required onChange={llenarFormulario}/>
                            </div>
                            <p>Total: ${getTotal()}</p>
                            <div><button type="submit">Enviar</button></div>
                        </form>
                    ) : (
                        <h1>Será redirigido al Dashboard</h1>
                    )}
                </div>
            ) : (
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/"><button className="buttonCart">Volver a la tienda</button></Link>
                </div>
            )}
        </div>
    );
};

export default CheckoutContainer;
