import React from 'react';
import { Container, Tab, Movies } from '../styles';
import Vehicle from '../../Characters/Vehicle';

function FeedVehicles() {
  return (
    <Container>
      <Tab>Vehicles</Tab>
      <Movies>
        <Vehicle />
      </Movies>
    </Container>
  );
}

export default FeedVehicles;
