import React, { useContext } from 'react';
import PlanetPage from '../PlanetPage';
import ProfilePage from '../ProfilePage';
import { MenuContext } from '../../contexts/MenuContext';
import {
  Container,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  StarShip,
  PlanetsIcon,
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
        <SearchIcon />
        <StarShip onClick={handleStarships} />
        <PlanetsIcon onClick={handlePlanets} />
      </BottomMenu>
    </Container>
  );
}

export default MainPlanets;
