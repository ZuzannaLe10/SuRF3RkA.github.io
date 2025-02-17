import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
`;

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }
`;

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Sklep internetowy zbudowany w React i Node.js",
    image: "https://via.placeholder.com/300x200/8A2BE2/ffffff"
  },
  {
    id: 2,
    title: "3D Game Environment",
    description: "Środowisko gry stworzone w Unity",
    image: "https://via.placeholder.com/300x200/4B0082/ffffff"
  },
  {
    id: 3,
    title: "AI Art Generator",
    description: "Generator sztuki wykorzystujący sztuczną inteligencję",
    image: "https://via.placeholder.com/300x200/9400D3/ffffff"
  }
];

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Moje Projekty</h2>
      <ProjectsGrid>
        {projectsData.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 