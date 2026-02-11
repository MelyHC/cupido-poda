import { Container } from 'react-bootstrap';

const Reputation = () => {
  return (
    <Container>
      <h4 className='my-5'>Reputación sin rankings. Historial sin espectáculo.</h4>
      <p>
        Trust Toke no construye reputación como un sistema de “mejor persona”.
        <br />La construye como un costo histórico.
      </p>
      <p>
        Una wallet con más señales no es superior.
        <br />Es simplemente más costosa de abandonar.
      </p>
      <article>
        <p>El costo se manifiesta en:</p>
        <ul>
          <li>Tiempo invertido</li>
          <li>Decisiones repetidas</li>
          <li>Señales acumuladas</li>
          <li>Huellas no borrables</li>
        </ul>
      </article>
      <p><b className='text-pink'>
        El sistema no afirma que seas confiable.
        <br />Afirma que tu presencia no es gratuita.
      </b></p>
    </Container>
  )
}

export default Reputation