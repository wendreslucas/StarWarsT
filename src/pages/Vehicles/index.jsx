import React from 'react';
import { Container, Wrapper } from './styles';
import MainVehicles from '../../components/Main/MainVehicles';
import MenuBar from '../../components/MenuBar';
import Sidebar from '../../components/Sidebar';

function Home() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainVehicles />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export default Home;
