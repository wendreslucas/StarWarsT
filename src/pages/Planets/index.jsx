import React from 'react';
import { Container, Wrapper } from './styles';
import MenuBar from '../../components/MenuBar';
import Sidebar from '../../components/Sidebar';
import MainPlanets from '../../components/MainPlanets';

function Planets() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainPlanets />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export default Planets;
