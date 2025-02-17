import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Nav = styled.nav`
  background: #000000; /* Czarne tło */
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 70px;
  width: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: #8A2BE2;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #8A2BE2;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  padding: 2rem;
  backdrop-filter: blur(10px);
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 1rem 0;
  text-align: center;
  font-size: 1.2rem;

  &:after {
    display: none;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home">
          <LogoImage 
            src="SuRF3Rk_A2.png" // Upewnij się, że ścieżka do logo jest poprawna
            alt="Logo"
          />
        </Logo>

        <NavLinks>
          <NavLink href="#about">O mnie</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#gallery">Grafiki</NavLink>
          <NavLink href="#services">Usługi</NavLink>
          <NavLink href="#contact">Kontakt</NavLink>
        
        </NavLinks>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>

        <MobileMenu isOpen={mobileMenuOpen}>
          <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>O mnie</MobileNavLink>
          <MobileNavLink href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</MobileNavLink>
          <MobileNavLink href="#gallery" onClick={() => setMobileMenuOpen(false)}>Grafiki</MobileNavLink>
          <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Usługi</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Kontakt</MobileNavLink>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 