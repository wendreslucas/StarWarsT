import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

function Sidebar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>{'Lorem ipsum dolor sit amet.'.repeat(50)}</p>
      </Body>
    </Container>
  );
}

export default Sidebar;
