import React, { useContext } from 'react';
import { MenuContext } from '../../../contexts/MenuContext';
import StarshipPage from '../../Profiles/StarshipPage';

import {
  Container,
  BottomMenu,
  Movie,
  Persons,
  StarShip,
  PlanetsIcon,
  Car
} from '../styles';

function MainStarships() {
  const { handleMovies, handlePersons, handlePlanets, handleStarships, handleVehicles } =
    useContext(MenuContext);
  return (
    <Container>
      <StarshipPage />
      <BottomMenu>
        <Movie onClick={handleMovies} />
        <Persons onClick={handlePersons} />
        <StarShip onClick={handleStarships} />
        <PlanetsIcon onClick={handlePlanets} />
        <Car onClick={handleVehicles}/>
      </BottomMenu>
    </Container>
  );
}

export default MainStarships;
