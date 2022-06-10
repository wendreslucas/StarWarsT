import React, { useState, useEffect } from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  Followage,
} from './styles';

import FeedStarship from '../../Feeds/FeedStarship';

function StarshipPage() {
  return (
    <Container>
      {/* <Banner>
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
      </ProfileData> */}
      <div>
        <FeedStarship />
      </div>
    </Container>
  );
}

export default StarshipPage;
