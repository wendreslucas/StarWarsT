import React from 'react';
import { Container, Wrapper } from './styles';
import MenuBar from '../../components/MenuBar';
import Sidebar from '../../components/Sidebar';
import MainCharacters from '../../components/Main/MainCharacters';

function Characters() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainCharacters />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export default Characters;
