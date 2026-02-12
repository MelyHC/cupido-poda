import { Container, Row } from 'react-bootstrap';
import CardCustom from '../components/CardCustom';

const Problem = () => {
  return (
    <Container>
      <h4 className='my-5'>El problema no es conectar personas. Es <span className='text-green'>confiar</span>.</h4>
      <p>
        Durante años las apps sociales optimizaron lo mismo: velocidad, volumen y alcance.
        Más matches. Más mensajes. Más opciones.
        <br /><br />
        Pero en ese camino, se perdió lo esencial: la <span className='text-pink'>confianza</span>.
      </p>
      <article className='d-flex row my-4'>
        <CardCustom
          title='Perfiles falsos y manipulables'
          body='Identidades inventadas, fotos falsas, screenshots y perfiles editables.' />
        <CardCustom
          title='Riesgo real en encuentros presenciales'
          body='La carga del riesgo cae completamente en el usuario.' />
        <CardCustom
          title='Exposición innecesaria de datos personales'
          body='Documentos, selfies y datos sensibles quedan en servidores centralizados.' />
        <CardCustom
          title='La plataforma es juez y parte'
          body='Decide qué es “verificado”, manipula visibilidad y controla la reputación.' />
      </article>
      <p><b>La confianza se volvió <span className='text-green'>frágil</span>. Y el engaño se volvió <span className='text-pink'>barato</span>.</b></p>
    </Container>
  )
}

export default Problem