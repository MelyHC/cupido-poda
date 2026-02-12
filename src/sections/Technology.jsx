import { Container } from 'react-bootstrap';
import CardCustom from '../components/CardCustom';

const Technology = () => {
  return (
    <Container>
      <h4 className='my-5'>Tecnología que no invade. Solo prueba.</h4>
      <h6 className='mb-5'>Trust Toke se apoya en Syscoin para lograr verificabilidad real sin sacrificar privacidad, escala ni soberanía del usuario.</h6>
      <article className='d-flex row mb-5'>
        <CardCustom
          title='PoDA (Proof of Data Availability)'
          body='Prueba que un dato existe y no fue alterado sin publicarlo en blockchain.' />
        <CardCustom
          title='zk-Proofs (Zero Knowledge Proofs)'
          body='Demostrás atributos sin revelar información sensible.'
          addbody='Ej: “Soy mayor de edad” sin revelar fecha de nacimiento.' />
        <CardCustom
          title='Syscoin Blockchain (Bitcoin-grade security)'
          body='Registro inmutable de emisión, validez y revocación.'
          addbody='Ni siquiera la plataforma puede editarlo.' />
        <CardCustom
          title='EVM Compatibility (Smart Contracts)'
          body='Contratos simples, tooling conocido y velocidad de iteración.' />
        <CardCustom
          title='Dual-layer Architecture'
          body='Datos pesados off-chain. Pruebas on-chain.'
          addbody='UX realista para una app social.' />
      </article>
      <p>
        No pedimos confianza.
        <br />Construimos evidencia.
      </p>
    </Container>
  )
}

export default Technology