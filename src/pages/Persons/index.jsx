import React from 'react';
import { Container, Wrapper } from './styles';
import MenuBar from '../../components/MenuBar';
import Sidebar from '../../components/Sidebar';
import MainPersons from '../../components/MainPersons';

function Persons() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainPersons />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export default Persons;
