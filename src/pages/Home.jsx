import { Button, Container } from 'react-bootstrap';
import Hero from '../sections/Hero';
import NavBarCustom from '../components/NavBarCustom';
import Problem from '../sections/Problem';
import Shift from '../sections/Shift';
import WhatIs from '../sections/WhatIs';
import Feature from '../sections/Feature';
import Timeline from '../sections/Timeline';
import '../styles/Home.css';
import Reputation from '../sections/Reputation';
import Privacy from '../sections/Privacy';
import Technology from '../sections/Technology';
import Comparison from '../sections/Comparison';
import Promise from '../sections/Promise';
import YellowPaper from '../sections/YellowPaper';
import FooterCustom from '../components/FooterCustom';

const Home = () => {
  return (
    <>
      <NavBarCustom />
      <Hero />
      <Problem />
      <Shift />
      <WhatIs />
      <Feature />
      <Timeline />
      <Reputation />
      <Privacy />
      <Technology />
      <Comparison />
      <Promise />
      <YellowPaper />
      <FooterCustom />
    </>
  )
}

export default Home