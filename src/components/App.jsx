import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './navBar/NavBar';
import { Producto } from './productos/Producto';
import { DetalleProducto } from './productos/DetalleProducto';




function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Producto />} />
          <Route path='/detalleProducto' element={<DetalleProducto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
