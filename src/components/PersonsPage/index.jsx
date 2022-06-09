import React, { useState, useEffect } from 'react';
import {
  Container,
  Banner,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
} from './styles';
import { swapi } from '../../services/api';

function PersonsPage() {
  const [personagens, setPersonagens] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    swapi.get('/people').then((response) => {
      setPersonagens(response.data.results);
      console.log(personagens);
    });
  }, []);

  useEffect(() => {
    swapi.get('/planets/').then((response) => {
      setPlanets(response.data.results);
      console.log(planets);
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
      <Body>
        <Avatar />
        <Content>
          {personagens?.map((personagem, index) => (
            <div key={index}>
              <Header>
                <strong>{personagem.name}</strong>
              </Header>
              <Description>{personagem.gender}</Description>
              <ImageContent></ImageContent>
            </div>
          ))}

          <Icons>
            <Status></Status>
            <Status></Status>
            <Status></Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default PersonsPage;
