const ItemDetail = ({ product }) => {
    return (
        <div className="ItemContainer">
            <img src={product.img} alt="Imagen" />
            <div className="detailsContainer">
                <div>
                    <p>
                        <span className="span">Descripcion:</span> {product.description}
                    </p>
                    <p>
                        <span className="span">Precio:</span> ${product.price}
                    </p>
                    <p>
                        <span className="span">Stock Disponible:</span> {product.stock}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
