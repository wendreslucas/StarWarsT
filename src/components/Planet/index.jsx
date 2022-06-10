import React, { useEffect, useState, useCallback } from 'react';
import { swapi } from '../../services/api';
import { debounce } from 'lodash';
import { getUrlId } from '../../utils/getUrlId';
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
} from './styles';

function Planet() {
  const [planets, setPlanets] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get('/planets/');
      const returnedData = await response.data;

      setPlanets(returnedData.results);
      console.log(planets);
    } catch {
    } finally {
      setIsLoading(false);
      console.log('fim');
    }
  }, []);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await swapi.get(`planets/?search=${SearchInput}`);
      const returnedData = response.data;

      setPlanets(returnedData.results);
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
          {/* {planets.map((planet, index) => {
            <Container>
              <Body>
                <Content>
                  <Avatar />
                  <Header key={index} />
                  <strong id={getUrlId(planet.url)}>{planet.name}</strong>
                  <Dot />
                  <span>{planet.climate}</span>
                  <Dot />
                  <span>{planet.terrain}</span>
                  <Header />
                  <CardInfo>
                    <Description>
                      <ImageContent
                        src={`https://starwars-visualguide.com/assets/img/planets/${getUrlId(
                          planet.url
                        )}.jpg`}
                      />
                    </Description>
                  </CardInfo>
                </Content>
              </Body>
            </Container>;
          })} */}
        </div>
      )}
    </>
  );
}

export default Planet;
