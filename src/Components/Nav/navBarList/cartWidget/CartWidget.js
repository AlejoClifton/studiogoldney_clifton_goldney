import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../../../../context/CartContext';

const CartWidget = () => {
    const { getCount } = useContext(Context);

    let count = getCount();

    return (
        <Link to={'/cart'} className="CartWidget" >
            <i className="fas fa-shopping-cart"></i>
            <p>{count}</p>
        </Link>
    );
};

export default CartWidget;
