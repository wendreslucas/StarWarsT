import React from 'react';
import { Container } from './styles';
import FeedCharacters from '../../Feeds/FeedCharacters';

function CharacterPage() {
  return (
    <Container>
      <div>
        <FeedCharacters />
      </div>
    </Container>
  );
}

export default CharacterPage;
