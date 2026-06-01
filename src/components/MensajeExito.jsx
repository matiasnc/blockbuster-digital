import { Container, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MensajeExito = ({ nombre }) => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Alert variant="success" className="text-center w-100 shadow-sm" style={{ maxWidth: '600px' }}>
        <Alert.Heading className="fs-2 mb-3">¡Mensaje enviado!</Alert.Heading>
        <p className="fs-5 mb-4">
          Gracias por escribirnos, <strong>{nombre}</strong>. Hemos recibido tu consulta y te responderemos a la brevedad.
        </p>
        <hr />
        <Button as={Link} to="/" variant="primary" size="lg" className="mt-2">
          Volver al Inicio
        </Button>
      </Alert>
    </Container>
  );
};

export default MensajeExito;