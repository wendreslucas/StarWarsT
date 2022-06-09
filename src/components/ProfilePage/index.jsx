import React, { useEffect, useState } from 'react';
import { git } from '../../services/api';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';
import Feed from '../Feed';

function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    git.get('/wendreslucas').then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Banner>
        <img className="backgroundImg" src="vader.jpg" />
        <Avatar src={user.avatar_url} />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}

        <h1>{user.name}</h1>
        <h2>@{user.twitter_username}</h2>

        <p>
          {user.bio} {user.company}
        </p>

        <ul>
          <li>
            <LocationIcon />
            {user.location}
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>{user.following}</strong>
          </span>
          <span>
            <strong>{user.followers} </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;
