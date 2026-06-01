import { useState } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';

const Contacto = () => {
  // 1. Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // 2. Estado para manejar errores y feedback visual
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [enviadoExitosamente, setEnviadoExitosamente] = useState(false);

  // Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiamos el error de ese campo si el usuario empieza a escribir de nuevo
    if (errores[name]) {
      setErrores({ ...errores, [name]: null });
    }
  };

  // Función para validar los datos antes de enviar
  const validarFormulario = () => {
    const nuevosErrores = {};
    
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }
    
    if (!formData.email.trim()) {
      nuevosErrores.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nuevosErrores.email = 'Ingresa un correo electrónico válido.';
    }
    
    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    }

    return nuevosErrores;
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    const erroresValidacion = validarFormulario();
    
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    // Si no hay errores, simulamos el envío (Aquí conectarías tu backend o EmailJS)
    setEnviando(true);
    
    setTimeout(() => {
      setEnviando(false);
      setEnviadoExitosamente(true);
      // Vaciamos el formulario
      setFormData({ nombre: '', email: '', mensaje: '' });
      
      // Ocultamos el mensaje de éxito después de 5 segundos
      setTimeout(() => setEnviadoExitosamente(false), 5000);
    }, 2000); // Simulamos 2 segundos de carga
  };

  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Contáctanos</h2>

      {/* Alerta de éxito */}
      {enviadoExitosamente && (
        <Alert variant="success">
          ¡Gracias por escribirnos! Tu mensaje ha sido enviado correctamente.
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        {/* Campo Nombre */}
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ej. Juan Pérez" 
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            isInvalid={!!errores.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {errores.nombre}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="tu@email.com" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errores.email}
          />
          <Form.Control.Feedback type="invalid">
            {errores.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo Mensaje */}
        <Form.Group className="mb-4" controlId="formMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            placeholder="¿En qué te podemos ayudar?" 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            isInvalid={!!errores.mensaje}
          />
          <Form.Control.Feedback type="invalid">
            {errores.mensaje}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Botón de Enviar */}
        <Button 
          variant="primary" 
          type="submit" 
          className="w-100" 
          disabled={enviando}
        >
          {enviando ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
              Enviando...
            </>
          ) : (
            'Enviar Mensaje'
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default Contacto;