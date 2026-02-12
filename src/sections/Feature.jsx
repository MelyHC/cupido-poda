import { Container } from 'react-bootstrap';
import CardCustom from '../components/CardCustom';

const Feature = () => {
  return (
    <Container>
      <h4 className='my-5'><span className='text-green'>Señales</span> simples. Acciones <span className='text-pink'>reales</span>.</h4>
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
        En <span className='text-green'>Trust Toke</span>, el comportamiento no se premia con <span className='text-pink'>fama</span>.
        <br />Se registra como <span className='text-green'>historial</span>.
      </p>
    </Container>
  )
}

export default Feature