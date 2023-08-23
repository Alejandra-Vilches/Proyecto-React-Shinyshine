import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainerProducts from './components/ItemListContainerProducts/ItemListContainerProducts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<ItemListContainerProducts/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainerProducts/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
       </Routes>
       <ItemListContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
