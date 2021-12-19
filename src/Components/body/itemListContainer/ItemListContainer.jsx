import { getCategory } from '../products/products';
import ItemList from './itemList/ItemList';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './itemListContainer.scss';

const ItemListContainer = ({ greeting, classItemListContainer }) => {
    const [listProduct, setListProduct] = useState([]);
    const { categoryId } = useParams();
    const [list, setList] = useState(false);

    useEffect(() => {
        const list = getCategory(categoryId);

        list.then((response) => {
            setListProduct(response);
            if (response.length === 0) {
                setList(false);
            } else {
                setList(true);
            }
        }).catch((error) => {
            console.log(error);
        });

        return () => {
            setListProduct();
        };
    }, [categoryId]);

    return (
        <div className={classItemListContainer}>
            {list ? (
                <div>
                    <h1 className="title">{greeting}</h1>
                    <ItemList products={listProduct} />
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
        </div>
    );
};

export default ItemListContainer;
