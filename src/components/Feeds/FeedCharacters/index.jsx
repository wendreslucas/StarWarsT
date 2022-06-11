import React from 'react';
import { Container, Tab, Movies } from '../styles';
import Character from '../../Characters/Character';

function FeedCharacters() {
  return (
    <Container>
      <Tab>Characters</Tab>
      <Movies>
        <Character />
      </Movies>
    </Container>
  );
}

export default FeedCharacters;
