import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import InputGroup from '../components/InputGroup';
import MensajeExito from '../components/MensajeExito';

const Contacto = () => {
  // Ya no necesitamos recibir el carrito como prop

  const [formData, setFormData] = useState({
    nombreApellido: '',
    email: '',
    telefono: '',
    direccion: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombreApellido.trim()) newErrors.nombreApellido = 'El nombre y apellido son obligatorios.';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'El formato del email no es válido.';
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio.';
    if (!formData.direccion.trim()) newErrors.direccion = 'La dirección o localidad es obligatoria.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Imprimimos por consola para simular el envío
      console.log("Datos de la consulta:", formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) return <MensajeExito nombre={formData.nombreApellido} />;

  return (
    <Container className="py-5" style={{ maxWidth: '650px' }}>
      <h2 className="text-center mb-4 fw-bold text-dark">Contacto</h2>

      <Card className="shadow-sm border-0">
        <Card.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            
            <InputGroup 
              label="Nombre y Apellido *" name="nombreApellido" 
              value={formData.nombreApellido} onChange={handleChange} error={errors.nombreApellido} 
              placeholder="Ej. Juan Pérez"
            />
            <InputGroup 
              label="Email *" type="email" name="email" 
              value={formData.email} onChange={handleChange} error={errors.email} 
              placeholder="ejemplo@correo.com"
            />
            <InputGroup 
              label="Teléfono *" type="tel" name="telefono" 
              value={formData.telefono} onChange={handleChange} error={errors.telefono} 
              placeholder="Ej. +54 11 1234-5678"
            />
            <InputGroup 
              label="Dirección / Localidad *" name="direccion" 
              value={formData.direccion} onChange={handleChange} error={errors.direccion} 
              placeholder="Ej. Av. Falsa 123, CABA"
            />

            <Form.Group className="mb-4" controlId="mensaje">
              <Form.Label className="fw-bold">Mensaje o Consulta</Form.Label>
              <Form.Control 
                as="textarea" rows={4} name="mensaje" 
                value={formData.mensaje} onChange={handleChange} 
                placeholder="Escribe tu consulta aquí..."
              />
            </Form.Group>

            <Button 
              variant="warning" 
              type="submit" 
              size="lg"
              className="w-100 fw-bold mt-2" 
            >
              Enviar Mensaje
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contacto;