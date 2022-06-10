import React, { useContext } from 'react';
import ProfilePage from '../../Profiles/ProfilePage';
import { MenuContext } from '../../../contexts/MenuContext';
import {
  Container,
  BottomMenu,
  HomeIcon,
  Persons,
  StarShip,
  PlanetsIcon,
  ExitDoor,
} from '../styles';

function MainMovies() {
  const { handleHome, handlePersons, handlePlanets, handleStarships } =
    useContext(MenuContext);
  return (
    <Container>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon onClick={handleHome} />
        <Persons onClick={handlePersons} />
        <StarShip onClick={handleStarships} />
        <PlanetsIcon onClick={handlePlanets} />
        <ExitDoor />
      </BottomMenu>
    </Container>
  );
}

export default MainMovies;
