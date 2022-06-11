import React from 'react';
import { Container, Tab, Movies } from '../styles';
import Movie from '../../Characters/Movie';

function FeedMovies() {
  return (
    <Container>
      <Tab>Movies</Tab>
      <Movies>
        <Movie />
      </Movies>
    </Container>
  );
}

export default FeedMovies;
