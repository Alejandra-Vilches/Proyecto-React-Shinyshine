import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainerProducts from './components/ItemListContainerProducts/ItemListContainerProducts';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {

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
       </Routes>
       
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
