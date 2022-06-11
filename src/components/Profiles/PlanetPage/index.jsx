import React from 'react';
import { Container } from '../styles';
import FeedPlanets from '../../Feeds/FeedPlanets';

function PlanetPage() {
  return (
    <Container>
      <div>
        <FeedPlanets />
      </div>
    </Container>
  );
}

export default PlanetPage;
