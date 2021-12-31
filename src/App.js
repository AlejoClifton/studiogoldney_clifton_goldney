import { CartContext } from './context/CartContext';
import { NotificationContext } from './context/NotificationContext';
import { UserContext } from './context/UserContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';

import ItemListContainer from './components/body/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/body/itemDetailContainer/ItemDetailContainer';
import CartViewContainer from './components/body/cartViewContainer/CartViewContainer';
import CheckoutContainer from './components/body/checkoutContainer/CheckoutContainer';
import Notification from './components/notification/Notification';
import DashBoardContainer from './components/body/dashBoard/DashBoardContainer';

function App() {
    return (
        <div className="App">
            <UserContext>
                <NotificationContext>
                    <CartContext>
                        <BrowserRouter>
                            <NavBar />
                            <Notification />
                            <Routes>
                                <Route path="/" element={<ItemListContainer />}></Route>
                                <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                                <Route path="/item/:paramId" element={<ItemDetailContainer />}></Route>
                                <Route path="/cart" element={<CartViewContainer />}></Route>
                                <Route path="/checkout" element={<CheckoutContainer />}></Route>
                                <Route path="/dashboard" element={<DashBoardContainer />}></Route>
                            </Routes>
                            <Footer />
                        </BrowserRouter>
                    </CartContext>
                </NotificationContext>
            </UserContext>
        </div>
    );
}

export default App;
