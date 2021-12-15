import { CartContext } from './context/CartContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/nav/NavBar';
import ItemListContainer from './components/body/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/body/itemDetailContainer/ItemDetailContainer';
import CartViewContainer from './components/body/cartViewContainer/CartViewContainer';

function App() {
    return (
        <div className="App">
            <CartContext>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer greeting={'Productos'} classItemListContainer="itemListContainer" />
                        </Route>
                        <Route path="/category/:categoryId">
                            <ItemListContainer greeting={'Productos'} classItemListContainer="itemListContainer" />
                        </Route>
                        <Route path="/item/:paramId">
                            <ItemDetailContainer />
                        </Route>
                        <Route path="/cart">
                            <CartViewContainer />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </CartContext>
        </div>
    );
}

export default App;
