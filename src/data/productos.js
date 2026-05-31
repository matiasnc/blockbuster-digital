// Volver al Futuro y El Resplandor los dejo en 0 para probar la función de Agotado.
// URLs: dejamos placehold.co que generan imágenes automáticas con el nombre de la película desde su página, despues lo cambiamos con los assets.
export const productos = [
  {
    id: 1,
    titulo: "Matrix",
    genero: "Ciencia Ficción",
    precio: 1500,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=The+Matrix",
    sinopsis: "Un experto en computadoras descubre que su mundo es una simulación total creada con maliciosas intenciones por parte de la ciberinteligencia.",
    stock: 5
  },
  {
    id: 2,
    titulo: "El Señor de los Anillos",
    genero: "Fantasía",
    precio: 1800,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=El+Senor+de+los+Anillos",
    sinopsis: "Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.",
    stock: 3
  },
  {
    id: 3,
    titulo: "Volver al Futuro",
    genero: "Ciencia Ficción",
    precio: 1200,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=Volver+al+Futuro",
    sinopsis: "Un joven de 17 años es enviado accidentalmente treinta años en el pasado en un DeLorean que viaja en el tiempo, inventado por su amigo científico.",
    stock: 0 // Sin stock para probar el bloqueo del botón
  },
  {
    id: 4,
    titulo: "Jurassic Park",
    genero: "Aventura",
    precio: 1400,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=Jurassic+Park",
    sinopsis: "Un pragmático paleontólogo visita un parque temático casi completo en una isla donde han creado dinosaurios a partir de ADN de ámbar.",
    stock: 10
  },
  {
    id: 5,
    titulo: "El Padrino",
    genero: "Drama",
    precio: 2000,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=El+Padrino",
    sinopsis: "El patriarca anciano de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.",
    stock: 2
  },
  {
    id: 6,
    titulo: "Terminator 2",
    genero: "Acción",
    precio: 1300,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=Terminator+2",
    sinopsis: "Un cyborg, idéntico al que fracasó en asesinar a Sarah Connor, debe proteger a su hijo de un cyborg más avanzado.",
    stock: 7
  },
  {
    id: 7,
    titulo: "Toy Story",
    genero: "Animación",
    precio: 1000,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=Toy+Story",
    sinopsis: "Un muñeco de un vaquero se siente profundamente amenazado y celoso cuando un nuevo muñeco de un astronauta se convierte en el juguete principal.",
    stock: 8
  },
  {
    id: 8,
    titulo: "El Resplandor",
    genero: "Terror",
    precio: 1600,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=El+Resplandor",
    sinopsis: "Una familia se dirige a un hotel aislado para el invierno, donde una presencia siniestra influye en el padre hacia la violencia.",
    stock: 0 // Sin stock para probar el bloqueo del botón
  },
  {
    id: 9,
    titulo: "Gladiador",
    genero: "Acción",
    precio: 1500,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=Gladiador",
    sinopsis: "Un antiguo general romano es traicionado y su familia es asesinada por el hijo corrupto de un emperador, por lo que decide venir a Roma como gladiador.",
    stock: 6
  },
  {
    id: 10,
    titulo: "Alien: El Octavo Pasajero",
    genero: "Terror",
    precio: 1400,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=Alien",
    sinopsis: "Después de que un buque mercante espacial recibe una transmisión desconocida como una llamada de socorro, aterriza en la luna de origen y encuentra algo espeluznante.",
    stock: 4
  },
  {
    id: 11,
    titulo: "Supercool",
    genero: "Comedia",
    precio: 900,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=Supercool",
    sinopsis: "Dos estudiantes de preparatoria co-dependientes se ven obligados a lidiar con la ansiedad por separación cuando su plan para organizar una fiesta sale mal.",
    stock: 12
  },
  {
    id: 12,
    titulo: "Avengers: Infinity War",
    genero: "Acción",
    precio: 1900,
    imagen: "https://placehold.co/300x450/1a1a1a/FFF?text=Avengers",
    sinopsis: "Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo para derrotar al poderoso Thanos antes de que destruya el universo.",
    stock: 15
  }
];