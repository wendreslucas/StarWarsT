import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { Root } from './pages/Root';
import { MenuContextProvider } from './contexts';

function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <GlobalStyle />
        <Root />
        <ToastContainer />
      </MenuContextProvider>
    </BrowserRouter>
  );
}

export default App;
