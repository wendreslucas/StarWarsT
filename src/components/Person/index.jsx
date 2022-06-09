import React, { useEffect, useState } from 'react';
import { swapi } from '../../services/api';
import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  SearchWrapper,
  SearchInput,
  SearchIcon,
} from './styles';

function Person() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    swapi.get('/people').then((response) => {
      setPersons(response.data.results);
      console.log(persons);
    });
  }, []);

  return (
    <>
      <SearchWrapper>
        <SearchInput placeholder="Buscar" />
        <SearchIcon />
      </SearchWrapper>

      {persons?.map((person, index) => (
        <Container>
          <Body>
            <Content>
              <Avatar />
              <Header key={index}>
                <strong>{person.name}</strong>
                <span>{person.age}</span>
              </Header>
              <Description></Description>
              <ImageContent />
              <Icons>
                <Status>
                  <CommentIcon />
                  18
                </Status>
                <Status>
                  <RetweetIcon />
                </Status>
                <Status>
                  <LikeIcon />
                </Status>
              </Icons>
            </Content>
          </Body>
        </Container>
      ))}
    </>
  );
}

export default Person;
