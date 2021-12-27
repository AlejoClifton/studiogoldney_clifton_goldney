import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../../service/firebase/productService';

import ItemCount from './itemCount/ItemCount';
import CartContext from '../../../context/CartContext';
import NotificationContext from '../../../context/NotificationContext';

import './itemDetailContainer.scss';

const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState([]);
    const { paramId } = useParams();
    const { addItemCart, addQuantity, addQuantityById, itemById } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const [purchase, setPurchase] = useState(false);
    const [object, setObjetc] = useState(false);

    const onAdd = (count) => {
        if (count > 0) {
            const productoRecibido = itemById(oneProduct.id);

            if (!productoRecibido) {
                addItemCart({
                    oneProduct,
                    count,
                });
                setNotification('succes', `¡Agregada la cantidad de ${count} de ${oneProduct.name} a tu carrito!`);
                addQuantity(count);
                setPurchase(true);
            } else {
                if (productoRecibido.count + count <= oneProduct.stock) {
                    setNotification('succes', `¡Agregada la cantidad de ${count} de ${oneProduct.name} a tu carrito!`);
                    addQuantityById(oneProduct.id, count);
                    setPurchase(true);
                } else {
                    setNotification('error', `¡Ingresaste más productos del stock permitido!`);
                }
            }
        } else {
            setNotification('error', `¡No seleccionaste ningún artículo de ${oneProduct.name} a tu carrito!`);
        }
    };

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

    return (
        <div className="itemDetailContainer">
            {object ? (
                <div>
                    <h1 className="title">Producto Seleccionado</h1>
                    <h2> {oneProduct.name} </h2>
                    <div className="containerDetail">
                        <img src={oneProduct.img} alt="Imagen" />
                        <div>
                            <p>
                                <span className="span">Descripcion:</span> {oneProduct.description}
                            </p>
                            <p>
                                <span className="span">Precio:</span> ${oneProduct.price}
                            </p>
                            {oneProduct.stock > 0 ? (
                                <div>
                                    <p>
                                        <span className="span">Stock Disponible:</span> {oneProduct.stock}
                                    </p>
                                    {!purchase ? (
                                        <ItemCount getStock={oneProduct.stock} onAdd={onAdd} getInitial={0} />
                                    ) : (
                                        <div className="link">
                                            <div>
                                                <Link className="linkClick" to={'/'}>
                                                    Seleccionar otro Artículo
                                                </Link>
                                            </div>
                                            <div>
                                                <Link className="linkClick" to={'/cart'}>
                                                    Ir al Carrito
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <p className="spanBlock">Stock No Disponible</p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className="title">Cargando...</h2>
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
