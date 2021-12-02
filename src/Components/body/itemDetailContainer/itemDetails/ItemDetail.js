import ItemCount from "../../itemCount/ItemCount";

import "../../../../global/loader.scss";
import "./itemDetails.scss";

const ItemDetail = ({ product }) => {
    return(
        <div className="oneProduct">
            {product.length !== 0 ? (
                <div>
                <h1>Producto Seleccionado</h1>
                <h2> {product.name} </h2>
                <img src={product.img} alt="Imagen" />
                <p>{product.price}</p>
                <p>{product.description}</p>
                <ItemCount getName={product.name} getStock={product.valueStock} getInitial={1} />
                <p>{product.stock}</p>
                </div>
            ):(<div>Cargando...</div>)}
        </div>
    )
};

export default ItemDetail;
