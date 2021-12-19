import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getItemById } from '../products/products';

import ItemDetail from './itemDetails/ItemDetail';
import ItemCount from './itemCount/ItemCount';
import CartContext from '../../../context/CartContext';

import './itemDetailContainer.scss';

const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState([]);
    const { paramId } = useParams();
    const { addItemCart, isInCart, addQuantity, addQuantityById, itemById } = useContext(CartContext);

    const [purchase, setPurchase] = useState(false);
    const [object, setObjetc] = useState(false);

    const onAdd = (count) => {
        if (count > 0) {
            if (!isInCart(oneProduct.id)) {
                addItemCart({
                    oneProduct,
                    count,
                });
                window.alert(`¡Agregada la cantidad de ${count} de ${oneProduct.name} a tu carrito!`);
                addQuantity(count);
                setPurchase(true);
            } else {
                const productoRecibido = itemById(oneProduct.id);

                if (productoRecibido.count + count <= oneProduct.stock) {
                    window.alert(`¡Agregada la cantidad de ${count} de ${oneProduct.name} a tu carrito!`);
                    addQuantityById(oneProduct.id, count);
                    setPurchase(true);
                } else {
                    window.alert(`¡Ingresaste más productos del stock permitido!`);
                }
            }
        } else {
            window.alert(`¡No seleccionaste ningún artículo de ${oneProduct.name} a tu carrito!`);
        }
    };

    useEffect(() => {
        const listOneProduct = getItemById(paramId);

        listOneProduct
            .then((response) => {
                setOneProduct(response);
                setObjetc(true);
            })
            .catch((error) => {
                console.log(error);
            });

        return () => {
            setOneProduct();
        };
    }, [paramId]);

    return (
        <div className="itemDetailContainer">
            {object ? (
                <div>
                    <h1 className="title">Producto Seleccionado</h1>
                    <h2> {oneProduct.name} </h2>
                    <div className="container">
                        <ItemDetail product={oneProduct} />
                        {!purchase ? (
                            <ItemCount getStock={oneProduct.stock} onAdd={onAdd} getInitial={0} />
                        ) : (
                            <div className="thisButtons">
                                <Link className="buttonLink" to={'/'}>
                                    Seleccionar otro Artículo
                                </Link>
                                <Link className="buttonLink" to={'/cart'}>
                                    Ir al Carrito
                                </Link>
                            </div>
                        )}
                    </div>
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

export default ItemDetailContainer;
