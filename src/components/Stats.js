import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaCode, FaCoffee, FaSmile, FaClock } from 'react-icons/fa';

const StatsSection = styled.section`
  padding: 100px 5vw;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(138, 43, 226, 0.1);
  }

  svg {
    color: #8A2BE2;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  color: #fff;
  margin: 1rem 0;
`;

const StatTitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
`;

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    coffee: 0,
    clients: 0,
    hours: 0
  });

  const targets = {
    projects: 50,
    coffee: 247,
    clients: 15,
    hours: 1000
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setCounts(prev => {
              const newCounts = { ...prev };
              let completed = true;
              
              Object.keys(targets).forEach(key => {
                if (prev[key] < targets[key]) {
                  newCounts[key] = Math.min(prev[key] + Math.ceil(targets[key] / 50), targets[key]);
                  completed = false;
                }
              });
              
              if (completed) clearInterval(interval);
              return newCounts;
            });
          }, 50);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('#stats'));
    return () => observer.disconnect();
  }, []);

  return (
    <StatsSection id="stats">
      <Container>
        <StatsGrid>
          <StatBox data-aos="zoom-in" data-aos-delay="0">
            <FaCode />
            <StatNumber>{counts.projects}</StatNumber>
            <StatTitle>Ukończonych Projektów</StatTitle>
          </StatBox>
          <StatBox data-aos="zoom-in" data-aos-delay="200">
            <FaCoffee />
            <StatNumber>{counts.coffee}</StatNumber>
            <StatTitle>Filiżanek Kawy</StatTitle>
          </StatBox>
          <StatBox data-aos="zoom-in" data-aos-delay="400">
            <FaSmile />
            <StatNumber>{counts.clients}</StatNumber>
            <StatTitle>Zadowolonych Klientów</StatTitle>
          </StatBox>
          <StatBox data-aos="zoom-in" data-aos-delay="600">
            <FaClock />
            <StatNumber>{counts.hours}</StatNumber>
            <StatTitle>Godzin Kodowania</StatTitle>
          </StatBox>
        </StatsGrid>
      </Container>
    </StatsSection>
  );
};

export default Stats; 