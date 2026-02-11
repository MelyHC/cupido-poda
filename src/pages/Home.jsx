import { Button, Container } from 'react-bootstrap';
import Hero from '../sections/Hero';
import NavBarCustom from '../components/NavBarCustom';
import '../styles/Home.css';
import Problem from '../sections/Problem';

const Home = () => {
  return (
    <>
      <NavBarCustom />
      <Hero />
      <Problem />
    </>
  )
}

export default Home