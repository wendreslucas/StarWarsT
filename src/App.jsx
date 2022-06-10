import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { Root } from './pages/Root';
import { MenuContextProvider } from './contexts/MenuContext';

function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <GlobalStyle />
        <Root />
      </MenuContextProvider>
    </BrowserRouter>
  );
}

export default App;
