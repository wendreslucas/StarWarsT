import React from 'react';
import { Container, Tab, Movies } from '../styles';
import Starship from '../../Characters/Starship/';

function FeedStarship() {
  return (
    <Container>
      <Tab>Starships</Tab>
      <Movies>
        <Starship />
      </Movies>
    </Container>
  );
}

export default FeedStarship;
