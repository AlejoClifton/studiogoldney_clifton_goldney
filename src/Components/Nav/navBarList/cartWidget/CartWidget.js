import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../../../../context/CartContext';

const CartWidget = () => {
    const { getCount } = useContext(Context);

    return (
        <Link to={'/cart'} className="CartWidget" >
            <i className="fas fa-shopping-cart"></i>
            <p>{getCount()}</p>
        </Link>
    );
};

export default CartWidget;
