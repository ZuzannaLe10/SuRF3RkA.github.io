import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Punkty sieci neuronowej
    const nodes = [];
    const nodeCount = 50; // liczba punktów
    const connectionDistance = 150; // maksymalna odległość połączenia
    const nodeSpeed = 0.5; // prędkość ruchu punktów

    // Dostosuj rozmiar canvas do okna
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Tworzenie punktów
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * nodeSpeed,
        vy: (Math.random() - 0.5) * nodeSpeed,
        radius: 2
      });
    }

    const drawNode = (node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#8A2BE2';
      ctx.fill();
    };

    const drawConnections = (node1, node2, distance) => {
      const opacity = 1 - (distance / connectionDistance);
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.strokeStyle = 'rgba(255, 20, 147, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aktualizacja pozycji punktów
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Odbijanie od krawędzi
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Rysowanie punktu
        drawNode(node);

        // Rysowanie połączeń
        nodes.forEach(otherNode => {
          if (node === otherNode) return;

          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            drawConnections(node, otherNode, distance);
          }
        });
      });

      // Dodanie interakcji z myszą
      canvas.addEventListener('mousemove', (e) => {
        const mouseNode = {
          x: e.clientX,
          y: e.clientY,
          radius: 0 // niewidoczny punkt
        };

        nodes.forEach(node => {
          const dx = mouseNode.x - node.x;
          const dy = mouseNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance * 1.5) {
            drawConnections(mouseNode, node, distance);
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default AnimatedBackground; 