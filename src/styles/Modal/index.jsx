import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, CloseButton } from './styles';

const portalRoot = document.getElementById('portal-root');

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <CloseButton type="button">X</CloseButton>
        {children}
      </Container>
    </Overlay>,
    portalRoot
  );
};

export default Modal;
