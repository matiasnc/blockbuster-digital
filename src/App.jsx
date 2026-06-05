import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header';
import Inicio from './pages/Inicio';
import './App.css';

import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';

function App() {
  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar películas al carrito
  const agregarAlCarrito = (producto) => {

    // Sirve para verificar si la película ya existe en el carrito
    const existe = carrito.some(
      pelicula => pelicula.id === producto.id
    );

    // Solo agrega si no está repetida
    if (!existe) {
      setCarrito([...carrito, producto]);
      return true
    }
    return false;
  };

  
  //Elimina una película del carrito.

  const eliminarDelCarrito = (id) => {
    setCarrito(
      carrito.filter(
      pelicula => pelicula.id !== id
      )
    );
  };
  
  const finalizarCompra = () => {
    alert("¡Compra realizada con éxito!");
    setCarrito([]);
  }



  //Elimina todas las películas del carrito.
  
  /*const vaciarCarrito = () => {
   setCarrito([]);
  };
  Todavia no la necesitamos.
  */
 /*Pense hacerlo todo aca porque como necesitamos el carrito se quede en la pagina actual tambien, nada eso. */
  
  return (
    <BrowserRouter>
      {/* El Header queda afuera de Routes para que se muestre en todas las pantallas */}
      <Header carrito={carrito} /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* Dejo las rutas comentadas para que las vayamos habilitando a medida que creamos los archivos */}
          { <Route path="/catalogo" element={<Productos />} /> }
          { <Route path="/pelicula/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} /> }
          { <Route path="/carrito" element={<Carrito 
          carrito = {carrito}
          eliminarDelCarrito={eliminarDelCarrito}
          finalizarCompra={finalizarCompra}/>} /> }
          { <Route path="/contacto" element={<Contacto />} /> }
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;