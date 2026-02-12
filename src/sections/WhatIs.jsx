import { Container } from 'react-bootstrap';

const WhatIs = () => {
  return (
    <Container>
      <h4 className='my-5'>¿Qué es <span className='text-green'>Trust Toke</span>?</h4>
      <p>
        <span className='text-green'>Trust Toke</span> no es dinero.
        <br />No es un puntaje.
        <br />No es un trofeo.
      </p>
      <p>
        <strong>
          Es una <span className='text-pink'>señal on-chain</span> que registra un <span className='text-green'>acto consciente</span>:
          participar, reconocer o aprender.
        </strong>
      </p>
      <p><span className='text-green'>Trust Toke</span> incluye:</p>
      <ul>
        <li>Emisor</li>
        <li>Receptor</li>
        <li>Contexto</li>
        <li>Timestamp</li>
        <li>Costo real</li>
      </ul>
      <p>
        No se transfiere. No se vende. No se farmea trivialmente.
        <br />Existe para <span className='text-pink'>recordar</span>.
      </p>
    </Container>
  )
}

export default WhatIs