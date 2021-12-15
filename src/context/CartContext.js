import React, { useState } from 'react';

const Context = React.createContext();

export const CartContext = ({ children }) => {
    const [itemCart, setItemCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addItemCart = (item) => {
        setItemCart([...itemCart, item]);
    };

    const removeItemCart = (itemId, itemQuantity) => {
        setItemCart(itemCart.filter((item) => item.getProduct.id !== itemId));
        setQuantity(quantity - itemQuantity);
    };

    const clearItems = () => {
        setItemCart([]);
        setQuantity(0);
    };

    const isInCart = (itemId) => {
        return itemCart.find((item) => item.getProduct.id === itemId);
    };

    const addQuantity = (itemQuantity) => {
        setQuantity(quantity + itemQuantity);
    };

    const addQuantityById = (itemId, itemQuantity) => {
        const item = itemCart.find((item) => item.getProduct.id === itemId);
        item.count = item.count + itemQuantity;
        addQuantity(itemQuantity);
    };

    const itemById = (id) => {
        return itemCart.find((item) => item.getProduct.id === id);
    };

    return (
        <Context.Provider
            value={{
                values: {
                    itemCart,
                    quantity,
                },
                itemCart,
                addItemCart,
                removeItemCart,
                clearItems,
                isInCart,
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
