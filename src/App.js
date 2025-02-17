import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import GlobalStyle from './styles/GlobalStyle';
import Services from './components/Services';
import About from './components/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background: #000;
  color: #fff;
`;

const ContentWrapper = styled.div`
  padding: 2rem;
`;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <AnimatedBackground />
      <ContentWrapper>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Timeline />
        <Services />
        <Stats />
        <Contact />
        <Footer />
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
