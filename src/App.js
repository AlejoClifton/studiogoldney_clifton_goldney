import { CartContext } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ItemListContainer
                                    greeting={'Productos'}
                                    classItemListContainer="itemListContainer"
                                />
                            }
                        ></Route>
                        <Route
                            path="/category/:categoryId"
                            element={
                                <ItemListContainer
                                    greeting={'Productos'}
                                    classItemListContainer="itemListContainer"
                                />
                            }
                        ></Route>
                        <Route path="/item/:paramId" element={<ItemDetailContainer />}></Route>
                        <Route path="/cart" element={<CartViewContainer />}></Route>
                    </Routes>
                </BrowserRouter>
            </CartContext>
        </div>
    );
}

export default App;
