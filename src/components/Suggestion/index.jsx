import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

function Suggestion(props) {
  const { name, nickname } = props;
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}

export default Suggestion;
