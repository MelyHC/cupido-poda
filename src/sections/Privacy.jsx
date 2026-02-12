import { Container } from 'react-bootstrap';

const Privacy = () => {
  return (
    <Container>
      <h4 className='my-5'><span className='text-pink'>Privacidad</span> por diseño. No por <span className='text-green'>promesa</span>.</h4>
      <p>
        La mayoría de plataformas te pide datos para protegerte… y luego los expone.
        <span className='text-green'>Trust Toke</span> funciona al revés.
      </p>
      <ul>
        <li>No publicamos documentos personales.</li>
        <li>No centralizamos información sensible.</li>
        <li>No obligamos a revelar identidad.</li>
        <li>El usuario decide qué demostrar y cuándo.</li>
      </ul>
      <p><strong>Demostrar algo no debería significar <span className='text-pink'>entregarlo</span>.</strong></p>
    </Container>
  )
}

export default Privacy