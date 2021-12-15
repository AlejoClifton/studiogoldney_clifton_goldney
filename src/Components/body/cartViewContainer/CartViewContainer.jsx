import React, {useContext} from 'react'
import CartContext from '../../../context/CartContext'
import ItemsCartList from './ItemCartList/ItemsCartList';
import "./cartViewContainer.scss";

const CartViewContainer = () => {
    const {itemCart} = useContext(CartContext);
    console.log(itemCart);
    return (
        <ItemsCartList items={itemCart}/>
    );
}

export default CartViewContainer;
