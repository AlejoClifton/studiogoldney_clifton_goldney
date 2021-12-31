import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../service/firebase/productService';

import Loader from '../../loader/Loader';
import ItemDetail from './itemDetail/ItemDetail';

import './itemDetailContainer.scss';

const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState([]);
    const { paramId } = useParams();
    const [object, setObjetc] = useState(false);

    useEffect(() => {
        getProductById('items', paramId)
            .then((res) => {
                setOneProduct(res);
                setObjetc(true);
            })
            .catch((error) => {
                console.log(error);
            });

        return () => {
            setOneProduct();
        };
    }, [paramId]);

    return <div className="itemDetailContainer">{object ? <ItemDetail item={oneProduct} /> : <Loader />}</div>;
};

export default ItemDetailContainer;
