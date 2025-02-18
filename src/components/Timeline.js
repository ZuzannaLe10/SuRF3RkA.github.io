import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaLaptopCode, FaCertificate, FaTrophy } from 'react-icons/fa';

const TimelineSection = styled.section`
  padding: 100px 5vw;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  text-align: center;
  margin-bottom: 4rem;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #8A2BE2, transparent);
    margin: 20px auto;
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, 
      rgba(138, 43, 226, 0) 0%,
      rgba(138, 43, 226, 1) 15%,
      rgba(138, 43, 226, 1) 85%,
      rgba(138, 43, 226, 0) 100%
    );

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-start' : 'flex-end'};
  padding-bottom: 4rem;
  width: 100%;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 40px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(138, 43, 226, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    ${props => props.align === 'right' ? 'left: -15px' : 'right: -15px'};
    width: 30px;
    height: 30px;
    background: #8A2BE2;
    border-radius: 50%;
    
    @media (max-width: 768px) {
      left: -55px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 20px;
  ${props => props.align === 'right' ? 'left: -15px' : 'right: -15px'};
  width: 30px;
  height: 30px;
  background: #8A2BE2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    left: -55px;
  }

  svg {
    color: #8A2BE2;
  }
`;

const TimelineDate = styled.div`
  color:  #8A2BE2;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TimelineText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const Timeline = () => {
  const events = [
    {
      date: "2021 - Obecnie",
      title: "Technikum Programistyczne",
      text: "Specjalizacja: Programista. Zgłębiam tajniki programowania i technologii webowych.",
      icon: <FaGraduationCap />,
      align: "left"
    },
    {
      date: "2023",
      title: "Pierwszy Staż Wakacyjny",
      text: "Rozpoczęcie pracy nad projektami stron internetowych dla klientów. Rozwój umiejętności w tworzeniu stron internetowych.",
      icon: <FaLaptopCode />,
      align: "right"
    },
    {
      date: "2023",
      title: "Pierwsze Praktyki Zawodowe",
      text: "Praca nad aplikacją do zarządzania wydatkami. Rozwój umiejętności w React.js, Firebase, Node.js.",
      icon: <FaLaptopCode />,
      align: "right"
    },
    {
      date: "2024",
      title: "Kwalifikacja INF.03",
      text: "Pomyślne zdanie egzaminu zawodowego z kwalifikacji INF.03. Tworzenie i administrowanie stronami internetowymi.",
      icon: <FaTrophy/>,
      align: "left"
    },
    {
      date: "2024",
      title: "Drugi Staż Wakacyjny",
      text: "Praca nad aplikacją zarządzającą zamówieniami. Rozwój umiejętności w PHP, Dbeaver, SCSS.",
      icon: <FaCertificate />,
      align: "left"
    },
    {
      date: "2024",
      title: "Drugie Praktyki Zawodowe",
      text: "Praca nad aplikacją e-learningową Eagle Weber. Rozwój umiejętności w Next.js, C#, Docker, Dbeaver.",
      icon: <FaTrophy />,
      align: "left"
    }
  ];

  return (
    <TimelineSection id="timeline">
      <Container>
        <Title>Moja Droga</Title>
        <TimelineWrapper>
          {events.map((event, index) => (
            <TimelineItem 
              key={index} 
              align={event.align}
              data-aos={event.align === 'right' ? 'fade-left' : 'fade-right'}
              data-aos-delay={index * 100}
            >
              <TimelineContent align={event.align}>
                <TimelineIcon align={event.align}>{event.icon}</TimelineIcon>
                <TimelineDate>{event.date}</TimelineDate>
                <TimelineTitle>{event.title}</TimelineTitle>
                <TimelineText>{event.text}</TimelineText>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </Container>
    </TimelineSection>
  );
};

export default Timeline; 