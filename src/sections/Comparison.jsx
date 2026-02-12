import { Container } from 'react-bootstrap';

const Comparison = () => {
  return (
    <Container>
      <h4 className='my-5'><span className='text-green'>Trust Toke</span> vs. apps tradicionales</h4>
      <div className='d-flex justify-content-around'>
        <article>
          <h6 className='text-secondary'>Apps tradicionales</h6>
          <ul>
            <li>Confían en perfiles</li>
            <li>Almacenan datos sensibles</li>
            <li>Reputación manipulable</li>
            <li>Moderación reactiva</li>
            <li>La plataforma controla el sistema</li>
          </ul>
        </article>
        <article>
          <h6 className='text-green'>Trust Toke</h6>
          <ul>
            <li>Confía en señales verificables</li>
            <li>No exige identidad invasiva</li>
            <li>Historial no editable</li>
            <li>Acciones con costo real</li>
            <li>Soberanía del usuario</li>
          </ul>
        </article>
      </div>
    </Container>
  )
}

export default Comparison