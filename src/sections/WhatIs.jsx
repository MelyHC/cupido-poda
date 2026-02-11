import { Container } from 'react-bootstrap';

const WhatIs = () => {
  return (
    <Container>
      <h4 className='my-5'>¿Qué es Trust Toke?</h4>
      <p>
        Trust Toke no es dinero.
        <br />No es un puntaje.
        <br />No es un trofeo.
      </p>
      <p>
        <strong>
          Es una señal on-chain que registra un acto consciente:
          participar, reconocer o aprender.
        </strong>
      </p>
      <p>Trust Toke incluye:</p>
      <ul>
        <li>Emisor</li>
        <li>Receptor</li>
        <li>Contexto</li>
        <li>Timestamp</li>
        <li>Costo real</li>
      </ul>
      <p>
        No se transfiere. No se vende. No se farmea trivialmente.
        <br />Existe para recordar.
      </p>
    </Container>
  )
}

export default WhatIs