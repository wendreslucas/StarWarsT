import React, { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { getUrlId } from '../../../utils/getUrlId';
import { swapi } from '../../../services/api';
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

function Starship() {
  const [starships, setStarships] = useState();
  const [inputSearch, setInputSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get('/starships/');
      const returnedData = response.data;

      setStarships(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await swapi.get(`/starships/?search=${SearchInput}`);
      const returnedData = response.data;

      setStarships(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [inputSearch]);

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
          {starships?.map((starship, index) => {
            <Container>
              <Body>
                <Content>
                  <Avatar />
                  <Header>
                    <strong>{starship.name}</strong>
                    <Dot />
                    <CardInfo>
                      <Description>
                        <ImageContent />
                      </Description>
                      <ListInfo></ListInfo>
                    </CardInfo>
                  </Header>
                </Content>
              </Body>
            </Container>;
          })}
        </div>
      )}
    </>
  );
}

export default Starship;
