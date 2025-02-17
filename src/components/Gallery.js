import React, { useState } from 'react';
import styled from 'styled-components';

const GallerySection = styled.section`
  padding: 100px 5vw;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #8A2BE2, transparent);
    margin: 20px auto;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);

    .overlay {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(138, 43, 226, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 2rem;
  text-align: center;
`;

const OverlayTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const OverlayDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: #8A2BE2;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? '#8A2BE2' : 'rgba(255, 255, 255, 0.05)'};
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: #8A2BE2;
    transform: translateY(-2px);
  }
`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const graphics = [
    {
      id: 1,
      title: "Projekt 1",
      description: "Opis projektu graficznego 1",
      image: "/path/to/image1.jpg",
      category: "logo"
    },
    {
      id: 2,
      title: "Projekt 2",
      description: "Opis projektu graficznego 2",
      image: "/path/to/image2.jpg",
      category: "social"
    },
    // Dodaj więcej projektów
  ];

  const filters = [
    { id: 'all', label: 'Wszystkie' },
    { id: 'logo', label: 'Logo' },
    { id: 'social', label: 'Social Media' },
    { id: 'web', label: 'Web Design' }
  ];

  const filteredGraphics = activeFilter === 'all' 
    ? graphics 
    : graphics.filter(graphic => graphic.category === activeFilter);

  return (
    <GallerySection id="gallery">
      <Container>
        <Title>Moje Grafiki</Title>
        
        <FilterButtons>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              data-aos="fade-up"
              data-aos-delay={filters.indexOf(filter) * 100}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>

        <GalleryGrid>
          {filteredGraphics.map((item, index) => (
            <GalleryItem
              key={item.id}
              onClick={() => setSelectedImage(item)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <GalleryImage src={item.image} alt={item.title} />
              <Overlay className="overlay">
                <OverlayTitle>{item.title}</OverlayTitle>
                <OverlayDescription>{item.description}</OverlayDescription>
              </Overlay>
            </GalleryItem>
          ))}
        </GalleryGrid>

        <Modal isOpen={!!selectedImage}>
          {selectedImage && (
            <ModalContent>
              <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
              <ModalImage src={selectedImage.image} alt={selectedImage.title} />
            </ModalContent>
          )}
        </Modal>
      </Container>
    </GallerySection>
  );
};

export default Gallery; 