import React from 'react';
import { CurrencyConverter } from './features/currencyConverter';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <CurrencyConverter />
    </>
  );
}

export default App;
