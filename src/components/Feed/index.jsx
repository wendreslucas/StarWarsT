import React from 'react';

import { Container, Tab, Tweets } from './styles';
import MovieList from './../MovieList/index';
import Film from './../Film';
import Teste from './../Teste/index';

function Feed() {
  return (
    <Container>
      <Tab>Movies</Tab>
      <Tweets>
        <Film />
        {/* <Teste /> */}
      </Tweets>
    </Container>
  );
}

export default Feed;
