import React from 'react';
import { Container, Wrapper } from './styles';
import MenuBar from '../../components/MenuBar';
import Sidebar from '../../components/Sidebar';
import MainStarships from './../../components/Main/MainStarships';

function Starships() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainStarships />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export default Starships;
