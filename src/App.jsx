import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'

function App() {
  return (
      <div>
        <NavBar/>
        <ItemListContainer  greeting={"Bienvenido"}/>
      </div>
  );
}

export default App
