import { Button, Container } from 'react-bootstrap';

const YellowPaper = () => {
  return (
    <Container>
      <h4 className='my-5'><span className='text-green'>Yellow Paper</span> V1</h4>
      <p>
        Este documento describe el modelo inicial de Trust Toke:
        <br />Señales discretas, reputación como costo acumulado y privacidad como regla estructural.
      </p>
      <article className='d-flex justify-content-around'>
        <Button className='outline-green'>Leer Yellow Paper</Button>
        <Button className='outline-pink'>Descargar PDF</Button>
        <Button className='outline-green'>Ver Docs</Button>
      </article>
    </Container>
  )
}

export default YellowPaper