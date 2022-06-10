import React from 'react';
import { Container, Wrapper } from './styles';
import MainMovies from '../../components/Main/MainMovies';
import MenuBar from '../../components/MenuBar';
import Sidebar from '../../components/Sidebar';

function Home() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainMovies />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export default Home;
