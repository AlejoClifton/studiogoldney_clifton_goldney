import React, { useContext, useState } from 'react';

import { getProductStock, outOfStockProduct } from '../../../service/firebase/productService';
import CartContext from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import NotificationContext from '../../../context/NotificationContext';
import UserContext from '../../../context/UserContext';

const FormContainer = () => {
    const { clearItems, getTotal, values } = useContext(CartContext);
    const { updateEmail } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);

    const [valores, setValores] = useState({ name: '', lastName: '', phone: '', email: '' });

    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

    const [ProccessingOrder, setProccessingOrder] = useState(false);
    const navigate = useNavigate();

    const fillOutForm = (e) => {
        const { name, value } = e.target;
        setValores({
            ...valores,
            [name]: value,
        });
    };

    const handleOnKeyDownPhone = (e) => {
        if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 13 || (e.keyCode >= 48 && e.keyCode <= 57)) {
        } else {
            e.preventDefault();
        }
    };

    const validateForm = (e) => {
        e.preventDefault();

        if (!valores.name) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
        if (!valores.lastName) {
            setErrorLastName(true);
        } else {
            setErrorLastName(false);
        }
        if (!valores.email) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        if (!valores.phone) {
            setErrorPhone(true);
        } else {
            setErrorPhone(false);
        }

        if (valores.name && valores.lastName && valores.email && valores.phone) {
            checkout();
        }
    };

    const checkout = () => {
        const purchase = {
            buyer: { nombre: valores.name, apellido: valores.lastName, phone: valores.phone, email: valores.email },
            items: values.itemCart,
            total: getTotal(),
        };

        let productSotck = getProductStock(purchase);

        outOfStockProduct(purchase, productSotck.batch, productSotck.outOfStock)
            .then((res) => {
                setNotification('succes', 'Su orden es: ' + res);
            })
            .catch((err) => {
                setNotification('error', 'Error ejecutando la orden' + err);
            })
            .finally(() => {
                updateEmail(purchase.buyer.email);
                setTimeout(() => {
                    navigate('/dashboard');
                    clearItems();
                }, 4000);
                setProccessingOrder(true);
            });
    };

    return (
        <div>
            {!ProccessingOrder ? (
                <form method="post" onSubmit={validateForm}>
                    <h1>Ingresar Datos</h1>
                    <div className="containerText">
                        <input type="text" placeholder="name" name="name" id="name" onChange={fillOutForm} />
                        {errorName && <p className="error">El nombre es requerido</p>}
                    </div>
                    <div className="containerText">
                        <input type="text" placeholder="lastName" name="lastName" id="lastName" onChange={fillOutForm} />
                        {errorLastName && <p className="error">El apellido es requerido</p>}
                    </div>
                    <div className="containerText">
                        <input type="email" placeholder="email" name="email" id="email" onChange={fillOutForm} />
                        {errorEmail && <p className="error">El email es requerido</p>}
                    </div>
                    <div className="containerText">
                        <input
                            type="tel"
                            placeholder="phone"
                            name="phone"
                            id="phone"
                            onKeyDown={handleOnKeyDownPhone}
                            onChange={fillOutForm}
                        />
                        {errorPhone && <p className="error">El teléfono es requerido</p>}
                    </div>
                    <p>Total: ${getTotal()}</p>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            ) : (
                <h1>Redireccionando al dashboard</h1>
            )}
        </div>
    );
};

export default FormContainer;
