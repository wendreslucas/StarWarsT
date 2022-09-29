import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import GitHub from '../GitHub';
import News from '../News';
import {
  Container,
  Body,
  SearchWrapper,
  SearchInput,
  SearchIcon,
} from './styles';
import Linkedin from '../Linkedin';

function Sidebar() {
  return (
    <Container>
      {/* <SearchWrapper>
        <SearchInput placeholder="Buscar" />
        <SearchIcon />
      </SearchWrapper> */}
      <StickyBox>
        <Body>
          <List title="Sugestões" elements={[<GitHub />]} />
          <List elements={[<Linkedin />]} />
          <List title="Trends" elements={[<News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default Sidebar;
