import React from 'react';

import { Container, Tab, Movies } from './styles';
import Film from '../../Film';

function FeedMovies() {
  return (
    <Container>
      <Tab>Movies</Tab>
      <Movies>
        <Film />
      </Movies>
    </Container>
  );
}

export default FeedMovies;
