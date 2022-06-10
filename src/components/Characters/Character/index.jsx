import React, { useEffect, useState, useCallback } from 'react';

import { debounce } from 'lodash';
import { getUrlId } from '../../../utils/getUrlId';
import { swapi } from '../../../services/api';
import { RiLoader2Line } from 'react-icons/ri';
import { useCharacter } from '../../../hooks/useCharacter';

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

function Character() {
  const [Characters, setCharacters] = useState();
  const [inputSearch, setInputSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get('/people/');
      const returnedData = await response.data;

      setCharacters(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await swapi.get(`/people/?search=${SearchInput}`);
      const returnedData = response.data;

      setCharacters(returnedData.results);
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
          {Characters?.map((Character, index) => (
            <Container>
              <Body>
                <Content>
                  <Avatar
                    key={index}
                    id={Character.id}
                    src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                      Character.url
                    )}.jpg`}
                  />
                  <Header>
                    <strong>{Character.name}</strong>
                    <Dot />
                  </Header>
                  <CardInfo>
                    <Description>
                      <ImageContent
                        src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                          Character.url
                        )}.jpg`}
                      />
                    </Description>
                    <ListInfo>
                      <p>
                        Nascimento: <span>{Character?.birth_year}</span>
                      </p>

                      <p>
                        Gênero: <span>{Character?.gender}</span>
                      </p>

                      <p>
                        Altura: <span>{Character?.height} cm</span>
                      </p>

                      <p>
                        Peso: <span>{Character?.mass} kg</span>
                      </p>

                      <p>
                        Cor da pele: <span>{Character?.skin_color}</span>
                      </p>

                      <p>
                        Cor dos olhos: <span>{Character?.eye_color}</span>
                      </p>

                      <p>
                        Cor do cabelo: <span>{Character?.hair_color}</span>
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

export default Character;
