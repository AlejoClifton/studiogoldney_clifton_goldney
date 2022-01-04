import ItemList from './itemList/ItemList';
import { getFirebase } from '../../../service/firebase/productService';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../loader/Loader';

import './itemListContainer.scss';

const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([]);
    const { categoryId } = useParams();
    const [list, setList] = useState(false);

    useEffect(() => {
        getFirebase('items', categoryId)
            .then((res) => {
                setListProduct(res);
                if (res.length === 0) {
                    setList(false);
                } else {
                    setList(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId]);

    return (
        <div className="itemListContainer">
            {list ? (
                <div>
                    <h1 className="title">{categoryId}</h1>
                    <ItemList products={listProduct} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default ItemListContainer;
