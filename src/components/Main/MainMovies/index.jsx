import React, { useContext } from 'react';
import MoviePage from '../../Profiles/MoviePage';
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

function MainMovies() {
  const { handleMovies, handlePersons, handlePlanets, handleStarships, handleVehicles } =
    useContext(MenuContext);
  return (
    <Container>
      <MoviePage />
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

export default MainMovies;
