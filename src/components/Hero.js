import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slideIn = keyframes`
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const HeroSection = styled.section`
  background: var(--background);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  position: relative;
  z-index: 2;
  margin-top: 80px;
  overflow: hidden;
`;

const AnimatedBackground = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 3;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  color: #FFFFFF;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: 2px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  span {
    display: block;
    color: #FFFFFF;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: #FFFFFF;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const drawLine = (startX, startY, length, angle, color) => {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      const endX = startX + Math.cos(angle) * length;
      const endY = startY + Math.sin(angle) * length;
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = color;
      ctx.stroke();
      return { x: endX, y: endY };
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 1;
      
      // Spirala 1
      let angle1 = time;
      let x1 = canvas.width / 2;
      let y1 = canvas.height / 2;
      let radius = 50;
      
      for (let i = 0; i < 100; i++) {
        const length = radius + i * 2;
        const color = `rgba(255, 255, 255, ${1 - i/100})`;
        const point = drawLine(x1, y1, length, angle1 + i * 0.1, color);
        x1 = point.x;
        y1 = point.y;
      }

      // Spirala 2
      let angle2 = -time * 1.5;
      let x2 = canvas.width / 2;
      let y2 = canvas.height / 2;
      
      for (let i = 0; i < 100; i++) {
        const length = radius + i * 2;
        const color = `rgba(138, 43, 226, ${1 - i/100})`;
        const point = drawLine(x2, y2, length, angle2 + i * 0.1, color);
        x2 = point.x;
        y2 = point.y;
      }

      // Linie przecinające
      for (let i = 0; i < 5; i++) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        const angle = Math.random() * Math.PI * 2;
        const length = Math.random() * 200 + 100;
        const opacity = Math.random() * 0.5;
        drawLine(startX, startY, length, angle, `rgba(255, 255, 255, ${opacity})`);
      }

      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <HeroSection id="home">
      <AnimatedBackground ref={canvasRef} />
      <HeroContent data-aos="fade-up">
        <Title>
          THE ULTIMATE<br />
          GRAPHIC DESIGN<br />
          WEBSITE DESIGN<br />
          PARTNER
        </Title>
        <Subtitle>
          Tworzę unikalne doświadczenia cyfrowe
        </Subtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 