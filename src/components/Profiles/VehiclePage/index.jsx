import React from 'react';
import { Container } from '../styles';
import FeedVehicles from '../../Feeds/FeedVehicles';

function VehiclePage() {
  return (
    <Container>
      <div>
        <FeedVehicles />
      </div>
    </Container>
  );
}

export default VehiclePage;
