import React from 'react';

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
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Wendres Lucas</h1>
        <h2>@wendreslucas</h2>

        <p>
          Developer at <a href="https://linkedin/me/wendreslucas">@Totale</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Espirito Santo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 29 de abril de 1992
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;
