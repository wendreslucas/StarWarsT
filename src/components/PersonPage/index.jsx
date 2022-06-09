import React, { useState, useEffect } from 'react';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  Followage,
} from './styles';
import { swapi } from '../../services/api';
import FeedPersons from '../Feeds/FeedPersons';

function PersonPage() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    swapi.get('/people').then((response) => {
      setPersonagens(response.data.results);
      console.log(personagens);
    });
  }, []);

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
        <FeedPersons />
      </div>
    </Container>
  );
}

export default PersonPage;
