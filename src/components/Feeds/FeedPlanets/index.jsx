import React from 'react';

import { Container, Tab, Movies } from './styles';

function FeedPlanets() {
  return (
    <Container>
      <Tab>Planets</Tab>
      <Movies>{/* <Planet /> */}</Movies>
    </Container>
  );
}

export default FeedPlanets;
