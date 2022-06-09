import React from 'react';
import PersonPage from '../PersonPage';

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
      <PersonPage />
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
