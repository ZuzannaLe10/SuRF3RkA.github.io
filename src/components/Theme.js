import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #242438; /* Jaśniejszy odcień tła */
    --background-secondary: #2f2f4a; /* Jaśniejszy odcień dla elementów */
    --card-bg: rgba(255, 255, 255, 0.08); /* Jaśniejsze tło dla kart */
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.9);
    --accent: #8A2BE2;
    --hover-bg: rgba(138, 43, 226, 0.15);
  }

  body {
    background: var(--background);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  #root {
    background: linear-gradient(
      to bottom,
      var(--background),
      var(--background-secondary)
    );
    min-height: 100vh;
  }

  .project-card {
    background: var(--card-bg);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export default GlobalStyle;

export const theme = {
  primary: '#8A2BE2', // Fioletowy
  primaryLight: 'rgba(138, 43, 226, 0.1)',
  primaryTransparent: 'rgba(138, 43, 226, 0.2)',
  gradient: 'linear-gradient(90deg, #8A2BE2, transparent)',
  gradientFull: 'linear-gradient(90deg, #9370DB, #8A2BE2)'
}; 