import React from 'react';

import { Container, Tab, Movies } from './styles';
import Starship from '../../Starship/';

function FeedStarship() {
  return (
    <Container>
      <Tab>Persons</Tab>
      <Movies>
        <Starship />
      </Movies>
    </Container>
  );
}

export default FeedStarship;
