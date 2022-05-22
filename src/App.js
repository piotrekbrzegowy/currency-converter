import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CurrencyConverter } from './features/currencyConverter';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CurrencyConverter />
      </ThemeProvider>
  );
}

export default App;
