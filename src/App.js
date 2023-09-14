import React, {useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainerProducts from './components/ItemListContainerProducts/ItemListContainerProducts';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection} from 'firebase/firestore';
import {db} from './services/firebase'
import {products} from './components/asyncMock'
import Checkout from './components/Checkout/Checkout';

function App() {
 /* useEffect(() => {
    const coleccionProductos = collection(db, 'products')
    products.map((item) => addDoc(coleccionProductos, item))
  }, [])*/

  return (

    <div className="App">
      <CartProvider>
        <BrowserRouter>
      
       <NavBar/>
       <Routes>
        <Route path='/' element={<ItemListContainerProducts/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainerProducts/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        <Route path='/checkout' element={<Checkout/>}/>
       </Routes>
       
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
