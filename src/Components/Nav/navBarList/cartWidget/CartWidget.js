import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../../../../context/CartContext';
import './cartWidget.scss';

const CartWidget = () => {
    const { values } = useContext(Context);

    return (
        <Link to={'/cart'} className="CartWidget" >
            <i className="fas fa-shopping-cart"></i>
            <p>{values.quantity}</p>
        </Link>
    );
};

export default CartWidget;
