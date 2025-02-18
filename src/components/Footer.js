import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaDiscord, FaEnvelope, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 4rem 5vw;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #8A2BE2;
    transform: translateY(-5px);
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: #8A2BE2;
  }
`;

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(138, 43, 226, 0.5),
    transparent
  );
  margin: 2rem 0;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #8A2BE2;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink 
            href="https://github.com/ZuzannaLe10" 
            target="_blank" 
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink 
            href="https://discord.com/users/yourid" 
            target="_blank" 
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaDiscord />
          </SocialLink>
          <SocialLink 
            href="mailto:surfrkaa@gmail.com"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        
        <FooterDivider />
        
        <FooterLinks>
          <FooterLink href="#about">O mnie</FooterLink>
          <FooterLink href="#portfolio">Portfolio</FooterLink>
          <FooterLink href="#services">Usługi</FooterLink>
          <FooterLink href="#contact">Kontakt</FooterLink>
        </FooterLinks>
        
        <Copyright>
          © {currentYear} Created with <FaHeart /> by SuRF3RkA
        </Copyright><br></br>
        e-mail: surfrkaa@gmail.com
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 