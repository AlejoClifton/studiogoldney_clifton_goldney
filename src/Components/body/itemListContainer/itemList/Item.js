import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="ItemsProducts">
            <h1> {product.name} </h1>
            <img src={product.img} alt="Imagen" />
            <p className="Price">${product.price}</p>
            <Link to={`/item/${product.id}`}>
                ver detalle del producto
            </Link>
        </div>
    );
};
export default Item;
