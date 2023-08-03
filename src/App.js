import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <ItemListContainer greeting={'Bienvenidas a la tienda'}/>
    </div>
  );
}

export default App;
