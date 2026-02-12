import { Container } from 'react-bootstrap';

const Shift = () => {
  return (
    <Container>
      <h4 className='my-5'>No cambiamos la interfaz. Cambiamos el modelo de <span className='text-green'>confianza</span>.</h4>
      <p>
        Las plataformas tradicionales te piden algo absurdo:
        <span className='text-green'> “Confía en la app”.</span>
      </p>
      <p>
        Trust Toke cambia esa lógica:
        <br />
        <b>Confía en la <span className='text-pink'>prueba criptográfica</span>.</b>
      </p>
      <ul>
        <li>No verificamos personas.</li>
        <li>No certificamos identidades.</li>
        <li>Registramos decisiones humanas.</li>
      </ul>
      <p>
        La confianza no es binaria.
        <br />
        Es gradual, contextual y acumulativa.
      </p>
    </Container>
  )
}

export default Shift