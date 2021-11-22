import "./body.scss";

const ItemListContainer = ({greeting,classItemListContainer}) => {
    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;