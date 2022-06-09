import React, { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../contexts';
import { git } from '../../services/api';

import {
  Container,
  Topside,
  MenuButton,
  Botside,
  Avatar,
  Logo,
  ProfileData,
  ExitIcon,
  DivLogo,
} from './styles';

function MenuBar() {
  const { handleHome, handlePersonagens, handlePlanetas, handleNaves } =
    useContext(MenuContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    git.get('/wendreslucas').then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Container>
      <Topside>
        <DivLogo>
          <Logo src="logo.png" />
        </DivLogo>

        <MenuButton onClick={handleHome} className="active">
          <img alt="icone" src="dashboard.svg" />
          <span>Dashboard</span>
        </MenuButton>

        <MenuButton onClick={handlePersonagens}>
          <img alt="icone" src="personagens.svg" />
          <span>Personagens</span>
        </MenuButton>

        <MenuButton onClick={handlePlanetas}>
          <img alt="icone" src="planetas.svg" />
          <span>Planetas e Luas</span>
        </MenuButton>

        <MenuButton onClick={handleNaves}>
          <img alt="icone" src="nave.svg" />
          <span>Naves Espaciais</span>
        </MenuButton>
      </Topside>
      <Botside>
        <Avatar src={user.avatar_url} />
        <ProfileData>
          <strong>{user.name}</strong>
          <span>@{user.twitter_username}</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;
