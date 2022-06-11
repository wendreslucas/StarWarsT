import React, { useEffect, useState, useCallback } from 'react';
import { swapi } from '../../../services/api';
import { getUrlId } from '../../../utils/getUrlId';
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
  LikeIcon
} from './styles';

function Movie() {
  const [movies, setMovies] = useState([]);
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

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);

  return (
    <>
   
      {isLoading ? (
        <LoadingDiv>
          <RiLoader2Line />
        </LoadingDiv>
      ) : (
        <div>
          {movies.map((movie, index) => (
            <Container>
              <Body>
                <Content>
                  <Avatar
                    key={index}
                    id={movie.id}
                    src={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                      movie.url
                    )}.jpg`}
                  />
                  <Header>
                    <strong id={getUrlId(movie.url)}>{movie.title}</strong>
                    <Dot />
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

export default Movie;
