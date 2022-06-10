import React, { useEffect, useState } from 'react';
import { git } from '../../services/api';

import { Container, Avatar, Info, FollowButton } from './styles';

function Suggestion(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    git.get('/wendreslucas').then((response) => {
      setUser(response.data);
    });
  });

  return (
    <Container>
      <div>
        <Avatar src={user.avatar_url} />
        <Info>
          <strong>{user.name}</strong>
          <span>
            <a href="https://github.com/wendreslucas" target="_blank">
              @{user.twitter_username}
            </a>
          </span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}

export default Suggestion;
