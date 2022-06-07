import React from 'react';
import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

function Feed() {
  return (
    <Container>
      <Tab>Posts</Tab>
      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;
