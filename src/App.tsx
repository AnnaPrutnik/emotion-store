import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import theme from './assets/styles/theme';
import { resetStyles } from './assets/styles/resetStyles';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={(theme) => css`
          ${resetStyles}
          body {
            font-family: ${theme.fonts.body};
          }
        `}
      />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
