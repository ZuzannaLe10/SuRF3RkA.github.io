import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { 
  FaReact, FaDocker, FaSass, FaDatabase, 
  FaGraduationCap, FaCode, FaIdCard, 
  FaInstagram, FaPencilRuler, FaTshirt,
  FaFlag, FaEnvelope,
  FaArrowLeft, FaArrowRight, FaGithub
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiDbeaver, 
  SiFirebase, SiDotnet 
} from 'react-icons/si';
import './Portfolio.css';

const Section = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled.div`
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: rgba(138, 43, 226, 0.2);
  }
`;

const GraphicCard = styled.div`
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: var(--hover-bg);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

const TechItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--hover-bg);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-primary);
`;

const LiveButton = styled.a`
  display: inline-block;
  background: var(--accent);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #7B27CC;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--background-secondary);
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ImageNavigation = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  transform: translateY(-50%);
  background: var(--accent);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7B27CC;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
`;

const SliderWrapper = styled.div`
  margin-top: 2rem;
  position: relative;
  
  .slick-slide img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 0 auto;
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #7B27CC;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background: ${props => props.active ? 'var(--accent)' : 'rgba(138, 43, 226, 0.7)'};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    transform: translateY(-2px);
  }
`;

const projects = [
  {
    title: "Eagle Weber",
    description: "Zaawansowana aplikacja edukacyjna stworzona w Next.js i C#",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "C#", icon: <SiDotnet /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "DBeaver", icon: <SiDbeaver /> }
    ],
    category: "web",
    liveLink: "https://github.com/twojuser/eagleweber"
  },
  {
    title: "Expense Tracker",
    description: "Aplikacja do śledzenia wydatków z wykorzystaniem React i Firebase",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "SCSS", icon: <FaSass /> }
    ],
    category: "web",
    liveLink: "https://github.com/twojuser/expensetracker"
  }
];

const graphicProjects = [
  {
    title: "Wizytówki i Identyfikacja",
    description: "Profesjonalne projekty wizytówek, logotypów i pełnej identyfikacji wizualnej dla firm",
    icon: <FaIdCard size={40} />,
    category: "business-cards",
    images: ['wizytowka_vrentis.png'
    ],
    modalDescription: "Tworzę kompleksowe projekty wizytówek dwustronnych, jednostronnych oraz całej identyfikacji wizualnej. Każdy projekt jest dopasowany do branży i potrzeb klienta, z dbałością o najdrobniejsze szczegóły i spójność wizualną."
  },
  {
    title: "Social Media Design",
    description: "Kreatywne posty i grafiki do mediów społecznościowych",
    icon: <FaInstagram size={40} />,
    category: "social-media",
    images: ['vrentis_post.png',
      'Elitist_Cuts .png',
      'SpeedXpress_post.png',
      'flower_beauty.png'
    ],
    modalDescription: "Projektuję angażujące grafiki do mediów społecznościowych, które przyciągają uwagę i budują spójny wizerunek marki. W ofercie: posty, stories, covery oraz pełne zestawy grafik do kampanii social media."
  },
  {
    title: "Materiały Reklamowe",
    description: "Projekty banerów, ulotek i materiałów promocyjnych",
    icon: <FaPencilRuler size={40} />,
    category: "gadgets",
    images: ['vrentis_kubki.png'],
    modalDescription: "Kompleksowe projektowanie materiałów reklamowych, od małych gadżetów po wielkoformatowe banery. Specjalizuję się w tworzeniu spójnych wizualnie zestawów materiałów promocyjnych, które skutecznie komunikują wartości marki."
  },
  {
    title: "Projekty Odzieży i Merchandise",
    description: "Autorskie projekty na odzież i akcesoria",
    icon: <FaTshirt size={40} />,
    category: "clothing",
    images: ['vrentis_koszulka.png',
      'kawa_koszulka.png',
      'komandosi.png',
      'bluza_no_motivation.png',
      'bluza_drift.png'
    ],
    modalDescription: "Tworzę unikalne projekty na odzież firmową, merchandise oraz kolekcje autorskie. Każdy projekt jest przygotowany z myślą o różnych technikach nadruku i haftowania, z zachowaniem najwyższej jakości wykonania."
  },
  {
    title: "Banery Reklamowe",
    description: "Projekty banerów reklamowych, roll-upów i reklam wielkoformatowych",
    icon: <FaFlag size={40} />,
    category: "banners",
    images: [],
    modalDescription: "Projektuję banery reklamowe w różnych formatach - od standardowych banerów przez roll-upy po wielkoformatowe reklamy zewnętrzne. Każdy projekt jest przygotowany z uwzględnieniem specyfikacji druku i miejsca ekspozycji."
  },
  {
    title: "Zaproszenia",
    description: "Projekty zaproszeń ślubnych, okolicznościowych i biznesowych",
    icon: <FaEnvelope size={40} />,
    category: "invitations",
    images: ['wedding_zaproszenie.png',
      '18_urodziny.png',
      'chrzciny.png'
    ],
    modalDescription: "Tworzę wyjątkowe projekty zaproszeń na różne okazje - śluby, uroczystości rodzinne, wydarzenia firmowe. Każdy projekt jest personalizowany i dopracowany w najdrobniejszych szczegółach, z możliwością doboru papierów i uszlachetnień."
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/SuRF3RkA',
    icon: <FaGithub />
  },
  // ... inne linki społecznościowe ...
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'web', name: 'Webowe' },
    { id: 'mobile', name: 'Mobilne' },
    { id: 'desktop', name: 'Desktopowe' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow className="prev"><FaArrowLeft /></SliderArrow>,
    nextArrow: <SliderArrow className="next"><FaArrowRight /></SliderArrow>
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Section id="portfolio">
      <Container>
        <Title>Projekty Programistyczne</Title>
        <CategoryButtons>
          {categories.map(category => (
            <CategoryButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryButtons>
        <Grid>
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectContent>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, i) => (
                    <TechItem key={i}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </TechItem>
                  ))}
                </TechStack>
                <LiveButton href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Zobacz Live
                </LiveButton>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>

        <Title style={{ marginTop: '4rem' }}>Projekty Graficzne</Title>
        <Grid>
          {graphicProjects.map((project, index) => (
            <GraphicCard 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              onClick={() => setSelectedProject(project)}
            >
              {project.icon}
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </GraphicCard>
          ))}
        </Grid>

        {selectedProject && (
          <Modal onClick={() => {
            setSelectedProject(null);
            setCurrentImageIndex(0);
          }}>
            <ModalContent onClick={e => e.stopPropagation()}>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <ProjectDescription>{selectedProject.modalDescription}</ProjectDescription>
              {selectedProject.images.length > 0 && (
                <div style={{ position: 'relative' }}>
                  <ModalImage 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <ImageNavigation 
                        direction="left" 
                        onClick={handlePrevImage}
                      >
                        <FaArrowLeft />
                      </ImageNavigation>
                      <ImageNavigation 
                        direction="right" 
                        onClick={handleNextImage}
                      >
                        <FaArrowRight />
                      </ImageNavigation>
                    </>
                  )}
                </div>
              )}
            </ModalContent>
          </Modal>
        )}
      </Container>
    </Section>
  );
};

const SocialMedia = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [
        '/images/social1.jpg',
        '/images/social2.jpg',
        '/images/social3.jpg',
        // Dodaj wszystkie swoje zdjęcia
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="social-media-section">
            <div className="gallery-container">
                <button className="arrow left-arrow" onClick={prevSlide}>&lt;</button>
                <div className="gallery">
                    <div 
                        className="gallery-wrapper" 
                        style={{ 
                            transform: `translateX(-${currentIndex * 100}%)`,
                            width: `${images.length * 100}%`
                        }}
                    >
                        {images.map((img, index) => (
                            <img 
                                key={index}
                                src={img} 
                                alt={`Social Media ${index + 1}`}
                                style={{ width: `${100 / images.length}%` }}
                            />
                        ))}
                    </div>
                </div>
                <button className="arrow right-arrow" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        
        <div className="gallery">
          <div 
            className="gallery-wrapper" 
            style={{ 
              transform: `translateX(-${currentImageIndex * 100}%)`,
              width: `${project.images.length * 100}%`
            }}
          >
            {project.images.map((image, index) => (
              <img
                key={index}
                src={`/images/${image}`}
                alt={`${project.title} ${index + 1}`}
                style={{ width: `${100 / project.images.length}%` }}
              />
            ))}
          </div>
        </div>

        {project.images.length > 1 && (
          <div className="gallery-navigation">
            <button className="arrow" onClick={prevImage}>
              &#8592; Poprzednie
            </button>
            <button className="arrow" onClick={nextImage}>
              Następne &#8594;
            </button>
          </div>
        )}

        <p>{project.modalDescription}</p>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a 
        href="https://github.com/SuRF3RkA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaGithub size={24} />
      </a>
      {/* ... inne linki społecznościowe ... */}
    </div>
  );
};

export default Portfolio;