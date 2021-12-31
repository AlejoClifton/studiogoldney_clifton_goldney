import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className="ItemsProducts">
            <img src={product.img} alt="Imagen" />
            <h1> {product.name} </h1>
            <p className="Price">${product.price}</p>
            {product.stock > 0 ? (
                <Link to={`/item/${product.id}`} className="linkClick">
                    ver detalle del producto
                </Link>
            ) : (
                <h2 className="spanBlock">Stock No Disponible</h2>
            )}
        </div>
    );
};
export default Item;
