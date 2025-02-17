import React from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaVuejs, FaAngular, FaBootstrap, FaPhp, 
  FaDatabase, FaPython, FaJava 
} from 'react-icons/fa';
import { 
  SiTypescript, SiCplusplus, 
  SiMysql, SiFastapi 
} from 'react-icons/si';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutSection = styled.section`
  padding: 100px 5vw;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #8A2BE2, transparent);
    margin: 20px auto;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const InfoCard = styled.div`
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: var(--hover-bg);
  }
`;

const InfoTitle = styled.h3`
  color: #8A2BE2;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(138, 43, 226, 0.1);
  }
`;

const SkillBar = styled.div`
  background: var(--card-bg);
  border-radius: 20px;
  height: 10px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: var(--accent);
    border-radius: 20px;
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: #8A2BE2;
  margin-right: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkillIcons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const About = () => {
  const personalInfo = [
    {
      title: "Edukacja",
      content: `• Technikum informatyczne
                • Specjalizacja: programista
                • Ukończona kwalifikacja INF.03
                • W trakcie przygotowań do INF.04`
    },
    {
      title: "Języki",
      content: `• Polski (ojczysty)
                • Angielski (komunikatywny)`
    },
    {
      title: "Zainteresowania",
      content: `• Edycja wideo
                • Programowanie w Pythonie
                • Eksploracja nowych technologii`
    }
  ];

  const skills = {
    "Frontend Core": [
      { name: "HTML5", level: 90, icon: <FaHtml5 /> },
      { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
      { name: "JavaScript", level: 85, icon: <FaJs /> },
      { name: "TypeScript", level: 40, icon: <SiTypescript /> }
    ],
    "Frontend Frameworks": [
      { name: "React", level: 60, icon: <FaReact /> },
      { name: "Vue.js", level: 40, icon: <FaVuejs /> },
      { name: "Angular", level: 30, icon: <FaAngular /> },
      { name: "Bootstrap", level: 70, icon: <FaBootstrap /> }
    ],
    "Backend & Databases": [
      { name: "PHP", level: 85, icon: <FaPhp /> },
      { name: "MySQL", level: 75, icon: <SiMysql /> },
      { name: "FastAPI", level: 40, icon: <SiFastapi /> }
    ],
    "Programming Languages": [
      { name: "C++", level: 85, icon: <SiCplusplus /> },
      { name: "Python", level: 75, icon: <FaPython /> },
      { name: "Java", level: 40, icon: <FaJava /> }
    ]
  };

  return (
    <AboutSection id="about">
      <Container>
        <Section delay={0.2}>
          <Title>O mnie</Title>
          <InfoGrid>
            {personalInfo.map((info, index) => (
              <InfoCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <InfoTitle>{info.title}</InfoTitle>
                <InfoText>{info.content}</InfoText>
              </InfoCard>
            ))}
          </InfoGrid>
        </Section>

        <Section delay={0.4}>
          <Title>Umiejętności</Title>
          <SkillsGrid>
            {Object.entries(skills).map(([category, categorySkills], index) => (
              <SkillCategory key={category} data-aos="fade-up" data-aos-delay={index * 100}>
                <InfoTitle>{category}</InfoTitle>
                <SkillIcons>
                  {categorySkills.map(skill => (
                    <SkillIcon key={skill.name} title={skill.name}>
                      {skill.icon}
                    </SkillIcon>
                  ))}
                </SkillIcons>
                {categorySkills.map(skill => (
                  <div key={skill.name}>
                    <SkillHeader>
                      <InfoText>{skill.name}</InfoText>
                    </SkillHeader>
                    <SkillBar progress={skill.level} />
                  </div>
                ))}
              </SkillCategory>
            ))}
          </SkillsGrid>
        </Section>
      </Container>
    </AboutSection>
  );
};

export default About; 