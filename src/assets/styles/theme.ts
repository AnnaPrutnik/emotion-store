const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    primary: '#088178',
    secondary: '#465b52',
    text: '#222',
    link: '#1a1a1a',
    background: '#e3e6f3',
    accent: '#cce7d0',
    highlight: '#e8f6ea',
    red: '#ec544e',
  },
  fonts: {
    body: 'League Spartan, sans-serif',
    heading: 'League Spartan, sans-serif',
  },
  space: [0, 5, 10, 15, 20, 40, 80],
  fontSizes: [12, 13, 14, 16, 20, 30, 46, 50],
  fontWeights: {
    body: 400,
    heading: 700,
    light: 300,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  shadows: {
    normal: '0 5px 15px rgba(0,0,0,0.06)',
    box: '20px 20px 34px rgba(0,0,0,0.03)',
    hover: '10px 10px 54px rgba(70,62,221,0.1)',
  },
  transitions: {
    normal: '0.5s ease',
  },
  radii: {
    normal: '20px',
    small: '4px',
    round: '50%',
  },
  borders: {
    normal: '1px solid',
  },
  breakpoints: { xs: '0px', sm: '477px', md: '799px', lg: '1200px' },
};

export type Theme = typeof theme;

export default theme;
