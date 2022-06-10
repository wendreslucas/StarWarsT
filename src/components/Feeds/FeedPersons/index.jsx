import React from 'react';
import { Container, Tab, Movies } from './styles';
import Person from '../../Characters/Character';

function FeedPersons() {
  return (
    <Container>
      <Tab>Persons</Tab>
      <Movies>
        <Person />
      </Movies>
    </Container>
  );
}

export default FeedPersons;
