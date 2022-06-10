import React, { useContext } from 'react';
import PlanetPage from '../../PlanetPage';
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

function MainPlanets() {
  const { handleHome, handlePersons, handlePlanets, handleStarships } =
    useContext(MenuContext);
  return (
    <Container>
      {/* <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Wendres Lucas</strong>
          <span> 1234 Posts</span>
        </ProfileInfo>
      </Header> */}
      <PlanetPage />
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

export default MainPlanets;
