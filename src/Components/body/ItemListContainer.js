import "./body.scss";

const ItemListContainer = ({greeting,classItemListContainer}) => {
    return (
        <div className={classItemListContainer}>
            <h1>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;