import React, { useEffect, useState, useCallback } from 'react';
import { swapi } from '../../services/api';
import { debounce } from 'lodash';
import { getUrlId } from '../../utils/getUrlId';

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

function Film() {
  const [movies, setMovies] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get('/films/');
      const returnedData = await response.data;

      setMovies(returnedData.results);
    } catch {
      console.log('Error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await swapi.get(`films/?search=${SearchInput}`);
      const returnedData = response.data;

      setMovies(returnedData.results);
    } catch {
    } finally {
      console.log('finally');
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
        <div>Carregando...</div>
      ) : (
        <div>
          {movies.map((movie, index) => (
            <Container>
              <Body>
                <Content>
                  <Avatar
                    src={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                      movie.url
                    )}.jpg`}
                  />
                  <Header key={index}>
                    <strong>{movie.title}</strong>
                    <span>{movie.director}</span>
                    <Dot />
                    <time>{movie.release_date}</time>
                  </Header>
                  <Description>{movie.opening_crawl}</Description>
                  <ImageContent
                    src={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                      movie.url
                    )}.jpg`}
                  />
                  <Icons>
                    <Status>
                      <CommentIcon />
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

export default Film;
