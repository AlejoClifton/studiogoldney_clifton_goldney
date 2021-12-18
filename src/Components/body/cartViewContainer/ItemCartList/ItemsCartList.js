import React from 'react';
import ItemCart from './ItemCart';

export const ItemsCartList = ({ items }) => {
    return (
        <div className="listCartProduct">
            {items.map((item) => (
                <ItemCart key={item.oneProduct.id} item={item.oneProduct} count={item.count} />
            ))}
        </div>
    );
};

export default ItemsCartList;
