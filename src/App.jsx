import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardWidget from './components/CardWidget';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<NavBar/>}/>
          <Route exact path="/about"element={<NavBar/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/ItemListContainer" element={<ItemListContainer greeting={"Bienvenido"}/>} />
          <Route exact path="/category/:category" element={<ItemListContainer greeting={"Productos..."}/>} />
          <Route exact path="/item/:id"  element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
