import { Container } from 'react-bootstrap';

const FooterCustom = () => {
  return (
    <Container className='mt-5'>
      <div  className='d-flex justify-content-between'>
        <article>
          <h6>Producto</h6>
          <ul>
            <li>¿Cómo funciona?</li>
            <li>Trust Toke</li>
            <li>Privacidad</li>
            <li>Tecnología</li>
          </ul>
        </article>
        <article>
          <h6>Docs</h6>
          <ul>
            <li>Yellow Paper</li>
            <li>Github</li>
            <li>Roadmap</li>
          </ul>
        </article>
        <article>
          <h6>Comunidad</h6>
          <ul>
            <li>Discord</li>
            <li>X / Twitter</li>
            <li>Telegram</li>
          </ul>
        </article>
        <article>
          <h6>Legal</h6>
          <ul>
            <li>Términos</li>
            <li>Política de privacidad</li>
          </ul>
        </article>
      </div>
      <p>© Trust Toke — Trust se construye, no se reclama.</p>
    </Container>
  )
}

export default FooterCustom