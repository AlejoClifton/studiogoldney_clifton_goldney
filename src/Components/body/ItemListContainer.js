import "./body.scss";
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting,classItemListContainer}) => {
    return (
        <div className={classItemListContainer}>
            <h1>{greeting}</h1>
            <ItemCount getStock={10}  getInitial={1}  />
        </div>
    );
}

export default ItemListContainer;