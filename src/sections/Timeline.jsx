import { Container } from 'react-bootstrap';

const Timeline = () => {
  return (
    <Container>
      <h4 className='my-5'>¿Cómo funciona?</h4>
      <div>
        <article>
          <h6>Entrás sin fricción</h6>
          <p>No hay registro tradicional. No hay email obligatorio. No hay documentos.</p>
        </article>
        <article>
          <h6>Entrás sin fricción</h6>
          <p>
            La app crea una wallet automáticamente.
            <br />Para el usuario, la experiencia es simple. Para el sistema, es persistente.
          </p>
        </article>
        <article>
          <h6>Aceptás dejar huella</h6>
          <p>Antes de interactuar plenamente, confirmás intención, presencia real y aceptación de huella.</p>
        </article>
        <article>
          <h6>Se minta tu primer Trust Toke</h6>
          <p>Tu Entry Toke queda registrado como tu acto fundacional.</p>
        </article>
        <article>
          <h6>Las interacciones dejan señales</h6>
          <p>Podés otorgar reconocimiento. Podés recibirlo. Podés construir historial.</p>
        </article>
        <article>
          <h6>La reputación se vuelve costo acumulado</h6>
          <p>No como prestigio, sino como algo difícil de falsificar y difícil de descartar.</p>
        </article>
      </div>
    </Container>
  )
}

export default Timeline