import { Container } from 'react-bootstrap';

const Privacy = () => {
  return (
    <Container>
      <h4 className='my-5'>Privacidad por diseño. No por promesa.</h4>
      <p>
        La mayoría de plataformas te pide datos para protegerte… y luego los expone.
        Trust Toke funciona al revés.
      </p>
      <ul>
        <li>No publicamos documentos personales.</li>
        <li>No centralizamos información sensible.</li>
        <li>No obligamos a revelar identidad.</li>
        <li>El usuario decide qué demostrar y cuándo.</li>
      </ul>
      <p><strong className='text-green'>Demostrar algo no debería significar entregarlo.</strong></p>
    </Container>
  )
}

export default Privacy