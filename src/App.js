import NavBar from "./components/nav/NavBar";
import ItemListContainer from "./components/body/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Hola Cómo estás soy un ItemListContainer'}/>
    </div>
  );
}

export default App;
