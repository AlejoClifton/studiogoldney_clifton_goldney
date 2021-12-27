import React, { useContext, useState, useEffect } from 'react';
import './dashBoardContainer.scss';
import { Link } from 'react-router-dom';

import CartContext from '../../../context/CartContext';
import { getOrders } from '../../../service/firebase/productService';
import ItemsDashBoard from './itemsDashBoard/ItemsDashBoard';

const DashBoardContainer = () => {
    const { values } = useContext(CartContext);
    const [listProduct, setListProduct] = useState([]);
    const [list, setList] = useState(false);

    useEffect(() => {
        getOrders('orders')
            .then((res) => {
                setListProduct(res.filter((item) => item.buyer.email === values.email));
                if (res.length === 0) {
                    setList(false);
                } else {
                    setList(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [values.email]);

    return (
        <div className="dashBoardContainer">
            {values.email !== '' ? (
                <div>
                    {list ? (
                        <div>
                            <h1 className="title">Tu Lista de Compras</h1>
                            <ItemsDashBoard products={listProduct} />
                        </div>
                    ) : (
                        <div>
                            <h2>Cargando...</h2>
                            <div className="lds-facebook">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    )}
                    <Link to="/">
                        <button className="buttonCart">Volver a la tienda</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <h1 className="title">No compraste nada aún</h1>
                    <Link to="/">
                        <button className="buttonCart">Volver a la tienda</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DashBoardContainer;
