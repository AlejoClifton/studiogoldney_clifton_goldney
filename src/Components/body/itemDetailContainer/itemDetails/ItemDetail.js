import ItemCount from "../../itemCount/ItemCount";

import "../../../../global/loader.scss";
import "./itemDetails.scss";

const ItemDetail = ({ product }) => {
    return (
        <div>
            {product.length !== 0 ? (
                <div className="oneProduct">
                    <h1>Producto Seleccionado</h1>
                    <h2> {product.name} </h2>
                    <div className="Dates">
                        <img src={product.img} alt="Imagen" />
                        <div className="datesProducts">
                            <p className="Description">
                                <span className="span">Descripcion:</span> {product.description}
                            </p>
                            <p className="Price"><span className="span">Precio:</span> {product.price}</p>
                            <p className="Stock"><span className="span">Stock Disponible:</span> {product.stock}</p>
                            <ItemCount
                                getName={product.name}
                                getStock={product.stock}
                                getInitial={1}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
};

export default ItemDetail;
