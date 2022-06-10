import React, { useContext } from 'react';
import PersonPage from '../PersonPage';
import { MenuContext } from '../../contexts/MenuContext';

import {
  Container,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  StarShip,
  PlanetsIcon,
} from './styles';

function MainPersons() {
  const { handleHome, handlePersons, handlePlanets, handleStarships } =
    useContext(MenuContext);
  return (
    <Container>
      <PersonPage />
      <BottomMenu>
        <HomeIcon onClick={handleHome} />
        <SearchIcon />
        <StarShip onClick={handleStarships} />
        <PlanetsIcon onClick={handlePlanets} />
      </BottomMenu>
    </Container>
  );
}

export default MainPersons;
