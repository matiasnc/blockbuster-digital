# 🍿 Blockbuster Digital



Una aplicación web para el alquiler de películas, inspirada en la clásica experiencia de Blockbuster.



🌐 **[Ver página](https://blockbuster-digital-mnc.vercel.app/)**



## 🚀 Características Principales



* **Catálogo Dinámico:** Visualización de películas en formato grilla utilizando *Cards*.

* **Filtros en Tiempo Real:** Búsqueda por título y filtrado por género.

* **Carrito de Compras Persistente:** Uso de `localStorage` mediante el hook `useEffect` (con técnica de *Lazy Initialization*) para evitar la perdida del carrito al actualizar página.

* **Diseño Responsive:** Interfaz adaptada a celulares, tablets y escritorio con esquema de grillas de React Bootstrap.

* **Formulario de Contacto Controlado:** Manejo de estado dinámico (`onChange`) y validaciones robustas antes del envío (`onSubmit`).

* **UX:** Alertas modernas y personalizadas implementadas con la librería *SweetAlert2*.

* **Navegación Fluida:** Enrutamiento usando *React Router DOM*.



## 🛠️ Tecnologías 



* **React** (Hooks: `useState`, `useEffect`)

* **Vite** (Entorno de desarrollo)

* **React Router DOM** (Navegación)

* **React Bootstrap** (Framework CSS y Componentes)

* **SweetAlert2** (Notificaciones/Alertas)



## 📁 Estructura del Proyecto

```text

📦 tienda-online

 ┣ 📂 public                   # Recursos estáticos públicos

 ┃ ┗ 🖼️ BLogoDark.png

 ┣ 📂 src                      # Código fuente de la aplicación

 ┃ ┣ 📂 assets                 # Imágenes locales (Hero, pósters de películas, etc.)

 ┃ ┣ 📂 components             # Componentes reutilizables

 ┃ ┃ ┣ ⚛️ Header.jsx

 ┃ ┃ ┣ ⚛️ InputGroup.jsx

 ┃ ┃ ┣ ⚛️ MensajeExito.jsx

 ┃ ┃ ┗ ⚛️ TarjetaPelicula.jsx

 ┃ ┣ 📂 data                   # Mock de datos (Simulación de Base de Datos)

 ┃ ┃ ┣ 📄 imagenes.js

 ┃ ┃ ┗ 📄 productos.js

 ┃ ┣ 📂 pages                  # Vistas principales (Páginas)

 ┃ ┃ ┣ ⚛️ Carrito.jsx

 ┃ ┃ ┣ ⚛️ Contacto.jsx

 ┃ ┃ ┣ ⚛️ DetalleProducto.jsx

 ┃ ┃ ┣ ⚛️ Inicio.jsx

 ┃ ┃ ┗ ⚛️ Productos.jsx

 ┃ ┣ 📂 utils                  # Funciones utilitarias globales

 ┃ ┃ ┗ 📄 alertas.js

 ┃ ┣ ⚛️ App.jsx                # Componente raíz y enrutador central

 ┃ ┣ 🎨 index.css              # Estilos globales y reseteo

 ┃ ┗ ⚛️ main.jsx               # Punto de entrada de React

 ┣ 📄 index.html

 ┣ 📄 package.json             # Dependencias y scripts

 ┣ 📄 vite.config.js

 ┗ 📄 README.md