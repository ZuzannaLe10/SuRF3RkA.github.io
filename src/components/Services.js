import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPalette, FaCode, FaMobileAlt, FaSearch } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ServicesSection = styled.section`
  padding: 100px 5vw;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: 0.2s;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #8A2BE2, transparent);
    margin: 20px auto;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${props => props.delay}s;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(138, 43, 226, 0.1);
    svg {
      color: #8A2BE2;
      transform: scale(1.1);
    }
  }

  svg {
    font-size: 3rem;
    color: #8A2BE2;
    margin-bottom: 1.5rem;
  }
`;

const ServiceTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  text-align: left;
`;

const ServiceItem = styled.li`
  color: rgba(255, 255, 255, 0.7);
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color:  #8A2BE2;
  }
`;

const ServiceIcon = styled.div`
  svg {
    color: #8A2BE2;
    font-size: 2.5rem;
  }
`;

const Services = () => {
  const services = [
    {
      icon: <FaPalette />,
      title: "Projektowanie Graficzne",
      description: "Tworzę unikalne projekty graficzne dopasowane do Twoich potrzeb",
      items: [
        "Identyfikacja wizualna",
        "Projekty logo",
        "Materiały marketingowe",
        "Media społecznościowe"
      ]
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Buduję nowoczesne i responsywne strony internetowe",
      items: [
        "Strony internetowe",
        "Aplikacje webowe",
        "Sklepy internetowe",
        "Optymalizacja wydajności"
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: "UI/UX Design",
      description: "Projektuję intuicyjne interfejsy użytkownika",
      items: [
        "Prototypowanie",
        "Projektowanie aplikacji",
        "Testy użyteczności",
        "Optymalizacja UX"
      ]
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle>Moje Usługi</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              data-aos="flip-left" 
              data-aos-delay={index * 100}
            >
              {service.icon}
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServicesList>
                {service.items.map((item, i) => (
                  <ServiceItem key={i}>{item}</ServiceItem>
                ))}
              </ServicesList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 