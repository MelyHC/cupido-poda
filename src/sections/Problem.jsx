import { Container, Row } from 'react-bootstrap';
import CardCustom from '../components/CardCustom';

const Problem = () => {
  return (
    <Container className='h-100vh' fluid="md">
      <h4 className='my-5'>El problema no es conectar personas. Es confiar.</h4>
      <p>
        Durante años las apps sociales optimizaron lo mismo: velocidad, volumen y alcance.
        Más matches. Más mensajes. Más opciones.
        <br /><br />
        Pero en ese camino, se perdió lo esencial: <span className='text-pink'>la confianza.</span>
      </p>
      <article className='d-flex row'>
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
      <p className='my-4'><b>La confianza se volvió frágil. Y el engaño se volvió barato.</b></p>
    </Container>
  )
}

export default Problem