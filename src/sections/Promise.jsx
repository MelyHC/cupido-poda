import { Container } from 'react-bootstrap';

const Promise = () => {
  return (
    <Container>
      <h4 className='my-5'>Lo que Trust Toke no promete</h4>
      <article>
        <p>Trust Toke <span className='text-green'>no promete</span>:</p>
        <ul>
          <li>Eliminar perfiles falsos al 100%</li>
          <li>Garantizar compatibilidad</li>
          <li>Asegurar relaciones exitosas</li>
          <li>Verificar quién eres realmente</li>
        </ul>
      </article>
      <p>
        Promete algo <span className='text-pink'>más honesto</span>:
        <br />Hacer que el <span className='text-green'>buen comportamiento</span> tenga peso.
      </p>
    </Container>
  )
}

export default Promise