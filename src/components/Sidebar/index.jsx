import React from 'react';
import List from '../List';

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
        <List
          title="Talvez você curta"
          elements={[<h1>Teste</h1>, <h1>Teste</h1>, <h1>Teste</h1>]}
        />
      </Body>
    </Container>
  );
}

export default Sidebar;
