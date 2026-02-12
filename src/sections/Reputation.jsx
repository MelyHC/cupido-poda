import { Container } from 'react-bootstrap';

const Reputation = () => {
  return (
    <Container>
      <h4 className='my-5'>Reputación <span className='text-pink'>sin rankings</span>. Historial <span className='text-green'>sin espectáculo</span>.</h4>
      <p>
        Trust Toke no construye reputación como un sistema de “mejor persona”.
        <br />La construye como un <span className='text-green'>costo histórico</span>.
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
      <p><b>
        El sistema no afirma que seas confiable.
        <br />Afirma que <span className='text-pink'>tu presencia</span> no es gratuita.
      </b></p>
    </Container>
  )
}

export default Reputation