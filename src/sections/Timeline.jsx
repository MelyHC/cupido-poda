import { Container } from 'react-bootstrap';

const Timeline = () => {
  return (
    <Container>
      <h4 className='my-5'>¿Cómo <span className='text-pink'>funciona</span>?</h4>
      <div className='d-flex row text-center align-items-center'>
        <article>
          <h6>Entrás <span className='text-green'>sin fricción</span></h6>
          <p>No hay registro tradicional. No hay email obligatorio. No hay documentos.</p>
        </article>
        <p>&darr;</p>
        <article>
          <h6>Tu identidad es una <span className='text-pink'>wallet</span> invisible</h6>
          <p>
            La app crea una wallet automáticamente.
            <br />Para el usuario, la experiencia es simple. Para el sistema, es persistente.
          </p>
        </article>
        <p>&darr;</p>
        <article>
          <h6>Aceptás dejar <span className='text-green'>huella</span></h6>
          <p>Antes de interactuar plenamente, confirmás intención, presencia real y aceptación de huella.</p>
        </article>
        <p>&darr;</p>
        <article>
          <h6>Se <span className='text-pink'>minta</span> tu primer Trust Toke</h6>
          <p>Tu Entry Toke queda registrado como tu acto fundacional.</p>
        </article>
        <p>&darr;</p>
        <article>
          <h6>Las interacciones dejan <span className='text-green'>señales</span></h6>
          <p>Podés otorgar reconocimiento. Podés recibirlo. Podés construir historial.</p>
        </article>
        <p>&darr;</p>
        <article>
          <h6>La <span className='text-pink'>reputación</span> se vuelve costo acumulado</h6>
          <p>No como +prestigio, sino como algo difícil de falsificar y difícil de descartar.</p>
        </article>
      </div>
    </Container>
  )
}

export default Timeline