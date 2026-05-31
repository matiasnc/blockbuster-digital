import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import './App.css';

// import Productos from './pages/Productos';
// import DetalleProducto from './pages/DetalleProducto';
// import Carrito from './pages/Carrito';
// import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      {/* El Header queda afuera de Routes para que se muestre en todas las pantallas */}
      <Header /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* Dejo las rutas comentadas para que las vayamos habilitando a medida que creamos los archivos */}
          {/* <Route path="/catalogo" element={<Productos />} /> */}
          {/* <Route path="/pelicula/:id" element={<DetalleProducto />} /> */}
          {/* <Route path="/carrito" element={<Carrito />} /> */}
          {/* <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;