import React, { useEffect, useState, useCallback } from 'react';

import { debounce } from 'lodash';
import { getUrlId } from '../../utils/getUrlId';
import { swapi } from '../../services/api';
import { RiLoader2Line } from 'react-icons/ri';

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  LoadingDiv,
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
  CardInfo,
  ListInfo,
} from './styles';
import { useCharacter } from '../../hooks/useCharacter';

function Person() {
  const [persons, setPersons] = useState();
  const [inputSearch, setInputSearch] = useState('');
  const [data, setData] = useState();
  const {
    movies,
    vehicles,
    starships,
    homeWorld,
    isLoading: isLoadingCharacter,
  } = useCharacter(data);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get('/people/');
      const returnedData = await response.data;

      setPersons(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await swapi.get(`/people/?search=${SearchInput}`);
      const returnedData = response.data;

      setPersons(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [SearchInput]);

  function handleInputChange(e) {
    setInputSearch(e.target.value);
  }

  const debouncedOnChange = debounce(handleInputChange, 500);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);

  useEffect(() => {
    setIsLoading(true);
    getFilteredData();
  }, [getFilteredData]);

  return (
    <>
      <SearchWrapper>
        <SearchInput
          type="text"
          onChange={(e) => debouncedOnChange(e)}
          placeholder="Buscar"
        />
        <SearchIcon />
      </SearchWrapper>

      {isLoading ? (
        <LoadingDiv>
          <RiLoader2Line />
        </LoadingDiv>
      ) : (
        <div>
          {persons?.map((person, index) => (
            <Container>
              <Body>
                <Content>
                  <Avatar
                    src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                      person.url
                    )}.jpg`}
                  />
                  <Header key={index} id={person.id}>
                    <strong>{person.name}</strong>
                    <Dot />
                  </Header>
                  <CardInfo>
                    <Description>
                      <ImageContent
                        src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                          person.url
                        )}.jpg`}
                      />
                    </Description>
                    <ListInfo>
                      <p>
                        Nascimento: <span>{person?.birth_year}</span>
                      </p>

                      <p>
                        Gênero: <span>{person?.gender}</span>
                      </p>

                      <p>
                        Altura: <span>{person?.height} cm</span>
                      </p>

                      <p>
                        Peso: <span>{person?.mass} kg</span>
                      </p>

                      <p>
                        Cor da pele: <span>{person?.skin_color}</span>
                      </p>

                      <p>
                        Cor dos olhos: <span>{person?.eye_color}</span>
                      </p>

                      <p>
                        Cor do cabelo: <span>{person?.hair_color}</span>
                      </p>
                    </ListInfo>
                  </CardInfo>
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
        </div>
      )}
    </>
  );
}

export default Person;
