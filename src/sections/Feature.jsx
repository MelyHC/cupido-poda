import { Container } from 'react-bootstrap';
import CardCustom from '../components/CardCustom';

const Feature = () => {
  return (
    <Container>
      <h4 className='my-5'>Señales simples. Acciones reales.</h4>
      <article className='d-flex row mb-5'>
        <CardCustom
          title='Trust Toke de Entrada'
          body='Marca el inicio: una decisión explícita de participar bajo reglas compartidas. No representa confianza. Representa voluntad.'
        />
        <CardCustom
          title='Trust Toke de Reconocimiento'
          body='Una persona puede otorgarlo tras una interacción percibida como positiva. No evalúa contenido.'
          addbody='Solo registra: “esto valió la pena”.'
        />
        <CardCustom
          title='Trust Toke de Conciencia'
          body='El usuario puede consumir contenido educativo sobre comunicación, vínculos sanos y cuidado relacional.'
          addbody='No certifica aprendizaje. Certifica intención de mejorar.'
        />
      </article>
      <p>
        En Trust Toke, el comportamiento no se premia con fama.
        <br />Se registra como historial.
      </p>
    </Container>
  )
}

export default Feature