import React, { useContext } from 'react';
import PlanetPage from '../../Profiles/PlanetPage';
import { MenuContext } from '../../../contexts/MenuContext';
import {
  Container,
  BottomMenu,
  Movie,
  Persons,
  StarShip,
  PlanetsIcon,
  Car
} from '../styles';

function MainPlanets() {
  const { handleMovies, handlePersons, handlePlanets, handleStarships, handleVehicles } =
    useContext(MenuContext);
  return (
    <Container>
      <PlanetPage />
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

export default MainPlanets;
