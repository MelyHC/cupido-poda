import { Button, Container } from 'react-bootstrap';
import Hero from '../sections/Hero';
import NavBarCustom from '../components/NavBarCustom';
import Problem from '../sections/Problem';
import Shift from '../sections/Shift';
import WhatIs from '../sections/WhatIs';
import Feature from '../sections/Feature';
import Timeline from '../sections/Timeline';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <NavBarCustom />
      <Hero />
      <Problem />
      <Shift />
      <WhatIs />
      <Feature />
      <Timeline/> 
    </>
  )
}

export default Home