import React from 'react';
import { Container } from './styles';
import FeedMovies from '../../Feeds/FeedMovies';

function ProfilePage() {
  return (
    <Container>
      <div>
        <FeedMovies />
      </div>
    </Container>
  );
}

export default ProfilePage;
