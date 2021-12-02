import NavBar from "./components/nav/NavBar";
import ItemListContainer from "./components/body/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/body/itemDetailContainer/ItemDetailContainer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={"Hola Cómo estás soy un ItemListContainer"} classItemListContainer="itemListContainer"/>
            <ItemDetailContainer/>
        </div>
    );
}

export default App;
