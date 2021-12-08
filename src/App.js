import NavBar from "./components/nav/NavBar";
import ItemListContainer from "./components/body/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/body/itemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <ItemListContainer
                            greeting={"Productos"}
                            classItemListContainer="itemListContainer"
                        />
                    </Route>
                    <Route path='/category/:categoryId'>
                        <ItemListContainer
                            greeting={"Productos"}
                            classItemListContainer="itemListContainer"
                        />
                    </Route>
                    <Route path='/item/:paramId'>
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
