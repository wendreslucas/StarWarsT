import React, { useContext } from 'react';
import CharacterPage from '../../Profiles/CharacterPage';
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

function MainCharacters() {
  const { handleMovies, handlePersons, handlePlanets, handleStarships, handleVehicles } =
    useContext(MenuContext);
  return (
    <Container>
      <CharacterPage />
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

export default MainCharacters;
