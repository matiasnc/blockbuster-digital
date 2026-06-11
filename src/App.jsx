import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header';
import Inicio from './pages/Inicio';

import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';


import { productos } from './data/productos'; // Import necesario para el const de listaProductos y setListaProductos.


function App() {
  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

  /* Esto va a servir como estado donde contiene todas las peliculas. */

  const [listaProductos, setListaProductos] = useState(productos);

  
 // Agrega una película al carrito y saca una unidad del stock.

  const agregarAlCarrito = (producto) => {

    // Verificamos si ya está en el carrito
    const existe = carrito.some(
      pelicula => pelicula.id === producto.id
    );

    // Solo se agrega si no está repetida y tiene stock
    if (!existe && producto.stock > 0) {

      // Agregamos la película al carrito
      setCarrito([
        ...carrito,
        producto
      ]);

      /*
        Actualizamos el stock.
        Buscamos la película agregada y le restamos 1.
      */
      setListaProductos(
        listaProductos.map(pelicula =>
          pelicula.id === producto.id
            ? {
                ...pelicula,
                stock: pelicula.stock - 1
              }
            : pelicula
        )
      );

      return true;
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
          { <Route path="/catalogo" element={<Productos
          productos = {listaProductos} 
          agregarAlCarrito = {agregarAlCarrito}
          />} /> }
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