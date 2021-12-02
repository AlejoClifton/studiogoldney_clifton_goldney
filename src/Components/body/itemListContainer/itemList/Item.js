const Item = ({ product }) => {
    return (
        <div className="ItemsProducts" >
            <h1> {product.name} </h1>
            <img src={product.img} alt="Imagen" />
            <p>{product.price}</p>
            <button>ver detalle del producto</button>
            <p>{product.stock}</p>
        </div>
    );
};
export default Item;
