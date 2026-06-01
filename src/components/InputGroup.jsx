import { Form } from 'react-bootstrap';

const InputGroup = ({ label, type = "text", name, value, onChange, error, placeholder }) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label className="fw-bold">{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={!!error} // Si hay un error, el borde se pone rojo automáticamente
      />
      {/* Feedback solo se muestra si isInvalid es true */}
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputGroup;