import React, { useState } from 'react';

const Context = React.createContext();

export const CartContext = ({ children }) => {
    const [itemCart, setItemCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addItemCart = (item) => {
        setItemCart([...itemCart, item]);
        setTotal(total + item.oneProduct.price * item.count);
    };

    const removeItemCart = (itemId, itemQuantity) => {
        let eliminado = itemCart.filter((item) => item.oneProduct.id === itemId);
        let sum = eliminado[0].oneProduct.price * eliminado[0].count;

        setItemCart(itemCart.filter((item) => item.oneProduct.id !== itemId));
        setQuantity(quantity - itemQuantity);

        setTotal(total - sum);
    };

    const clearItems = () => {
        setItemCart([]);
        setQuantity(0);
    };

    const addQuantity = (itemQuantity) => {
        setQuantity(quantity + itemQuantity);
    };

    const addQuantityById = (itemId, itemQuantity) => {
        const item = itemCart.find((item) => item.oneProduct.id === itemId);
        item.count = item.count + itemQuantity;
        addQuantity(itemQuantity);
    };

    const itemById = (id) => {
        return itemCart.find((item) => item.oneProduct.id === id);
    };

    return (
        <Context.Provider
            value={{
                values: {
                    itemCart,
                    quantity,
                    total,
                },
                itemCart,
                addItemCart,
                removeItemCart,
                clearItems,
                addQuantity,
                addQuantityById,
                itemById,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;
