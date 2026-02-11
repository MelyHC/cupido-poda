import { Button, Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container className='d-flex row text-center h-100vh mx-auto align-items-center'>
      <div className='d-flex row my-5 py-5'>
        <h1 className='title my-5'>La confianza no se declara. <span className='text-green'>Se construye</span>.</h1>
        <h3 className='my-5'>Trust Toke es una capa de señales humanas verificables para apps sociales y de citas.
          Sin verificaciones invasivas. Sin rankings. Sin perfiles que <span className='text-pink'>“prometen”</span>.</h3>
      </div>
      <div>
        <p>
          Registramos decisiones con costo real.
          Porque en los espacios donde todo es gratis, el daño también lo es.
        </p>
        <article className='my-4'>
          <Button className='btn-green mx-3'>Acceso anticipado</Button>
          <Button className='btn-pink mx-3'>Leer paper</Button>
        </article>
        <p>Built on Syscoin · zk-Proofs · Privacy by Design · Bitcoin-grade Security</p>
      </div>
    </Container>
  )
}

export default Hero