import React, { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import { git } from '../../services/api';
import { BsLinkedin } from 'react-icons/bs';

import { Container, Avatar, Info, FollowButton } from './styles';

function Linkedin() {
  const { handleLinkedin } = useContext(MenuContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    git.get('/wendreslucas').then((response) => {
      setUser(response.data);
    });
  });

  return (
    <Container>
      <div>
        <Avatar src="logoLinkedin.png" />

        <Info>
          <strong>{user.name}</strong>
          <span>
            <a href="https://www.linkedin.com/in/wendres-lucas" target="_blank">
              @{user.twitter_username}
            </a>
          </span>
        </Info>
      </div>
      <FollowButton onClick={handleLinkedin} outlined>
        Seguir
      </FollowButton>
    </Container>
  );
}

export default Linkedin;
