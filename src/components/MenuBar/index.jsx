import React, { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
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
  const { handleHome, handlePersons, handlePlanets, handleStarships } =
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
        <MenuButton onClick={handleHome}>
          <img alt="icone" src="dashboard.svg" />
          <span>Dashboard</span>
        </MenuButton>
        <MenuButton onClick={handlePersons}>
          <img alt="icone" src="personagens.svg" />
          <span>Personagens</span>
        </MenuButton>
        <MenuButton onClick={handlePlanets}>
          <img alt="icone" src="planetas.svg" />
          <span>Planetas e Luas</span>
        </MenuButton>
        <MenuButton onClick={handleStarships}>
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
