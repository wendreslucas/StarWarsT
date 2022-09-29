import React, { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import { git } from '../../services/api';
import { Container, Avatar, Info, FollowButton } from './styles';

function GitHub() {
  const { handleGitHub } = useContext(MenuContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    git.get('/wendreslucas').then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Container>
      <div>
        <Avatar src={user.avatar_url} />
        <Info>
          <strong>{user.name}</strong>
          <span>
            <a
              href="https://github.com/wendreslucas"
              target="_blank"
              rel="noreferrer"
            >
              @{user.twitter_username}
            </a>
          </span>
        </Info>
      </div>
      <FollowButton onClick={handleGitHub} outlined>
        Seguir
      </FollowButton>
    </Container>
  );
}

export default GitHub;
