import React from 'react';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  Followage,
} from './styles';
import FeedPlanets from '../../Main/MainPlanets';

function PlanetPage() {
  return (
    <Container>
      <Banner>
        <img
          alt="banner Darth Vader"
          className="backgroundImg"
          src="vader.jpg"
        />
      </Banner>
      <ProfileData>
        <h1></h1>
        <h2></h2>

        <p></p>

        <ul>
          <li></li>
        </ul>
        <Followage>
          <span>
            <strong></strong>
          </span>
          <span>
            <strong> </strong>
          </span>
        </Followage>
      </ProfileData>
      <div>
        <FeedPlanets />
      </div>
    </Container>
  );
}

export default PlanetPage;
