import Swal from 'sweetalert2';

export const mostrarAlertaCarrito = (exito, titulo) => {
  if (exito) {
    Swal.fire({
      title: "¡Agregada!",
      text: `Sumaste "${titulo}" a tu carrito.`,
      icon: "success",
      showConfirmButton: true,
      confirmButtonColor: "#ffc107",
      confirmButtonText: "¡Listo!"
    });
  } else {
    Swal.fire({
      title: "Ups...",
      text: "Esta película ya está en tu carrito.",
      icon: "error",
      confirmButtonColor: "#030303"
    });
  }
};