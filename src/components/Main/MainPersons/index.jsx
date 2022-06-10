import React, { useContext } from 'react';
import PersonPage from '../../Profiles/PersonPage';
import { MenuContext } from '../../../contexts/MenuContext';

import {
  Container,
  BottomMenu,
  HomeIcon,
  Persons,
  StarShip,
  PlanetsIcon,
  ExitDoor,
} from './styles';

function MainPersons() {
  const { handleHome, handlePersons, handlePlanets, handleStarships } =
    useContext(MenuContext);
  return (
    <Container>
      <PersonPage />
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

export default MainPersons;
