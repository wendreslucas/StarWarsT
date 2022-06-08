import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import Suggestion from '../Suggestion';
import News from '../News';

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

      <StickyBox>
        <Body>
          <List
            title="Sugestões"
            elements={[
              <Suggestion name="Wendres Lucas" nickname="@wendreslucas" />,
              <Suggestion name="Wendres Lucas" nickname="@wendreslucas" />,
              <Suggestion name="Wendres Lucas" nickname="@wendreslucas" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default Sidebar;
