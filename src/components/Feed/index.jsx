import React from 'react';

import { Container, Tab, Tweets, Tweet } from './styles';

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
      </Tweets>
    </Container>
  );
}

export default Feed;
