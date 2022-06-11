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
  const { handleHome, handlePersons, handlePlanets, handleStarships, handleVehicles } =
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
          <img alt="icone" src="movies.svg" />
          <span>Dashboard</span>
        </MenuButton>
        <MenuButton onClick={handlePersons}>
          <img alt="icone" src="personagens.svg" width={'60px'} height={'60px'} />
          <span>Characters</span>
        </MenuButton>
        <MenuButton onClick={handlePlanets}>
          <img alt="icone" src="planetStarDeath.svg" width={'60px'} height={'60px'}/>
          <span>Planets</span>
        </MenuButton>
        <MenuButton onClick={handleStarships}>
        <img alt="icone" src="starship1.svg" width={'60px'} height={'60px'} />
          <span>Starships</span>
        </MenuButton>
        <MenuButton onClick={handleVehicles}>
          <img alt="icone" src="vehicle1.svg" width={'60px'} height={'60px'} />
          <span>Vehicle</span>
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
