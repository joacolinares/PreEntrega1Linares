import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './navBar/NavBar';
import { Producto } from './productos/Producto';
import { DetalleProducto } from './productos/DetalleProducto';

//Contexto
import { DarkModeProvider } from '../context/DarkModeContext';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
