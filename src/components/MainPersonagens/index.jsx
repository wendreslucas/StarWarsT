import React from 'react';
import PersonsPage from '../PersonsPage';
import {
  Container,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

function MainPersonagens() {
  return (
    <Container>
      <PersonsPage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default MainPersonagens;
