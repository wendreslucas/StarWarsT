import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Wrapper,
  ContainerMain,
  BottomMenu,
  Movie,
  Persons,
  StarShip,
  PlanetsIcon,
  Car,
  ContainerProfile,
  ContainerFeed,
  Tab,
  Content,
} from './styles';

import MenuBar from '../../components/MenuBar';
import Sidebar from '../../components/Sidebar';
import { MenuContext } from '../../contexts/MenuContext';

function Layout() {
  const {
    handleMovies,
    handlePersons,
    handlePlanets,
    handleStarships,
    handleVehicles,
  } = useContext(MenuContext);

  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <ContainerMain>
          <ContainerProfile>
            <ContainerFeed>
              <Tab>FEED</Tab>
              <Content>
                <Outlet />
              </Content>
            </ContainerFeed>
          </ContainerProfile>
          <BottomMenu>
            <Movie onClick={handleMovies} />
            <Persons onClick={handlePersons} />
            <StarShip onClick={handleStarships} />
            <PlanetsIcon onClick={handlePlanets} />
            <Car onClick={handleVehicles} />
          </BottomMenu>
        </ContainerMain>
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
