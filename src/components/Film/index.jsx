import React, { useEffect, useCallback, useState } from 'react';
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
} from './styles';

function Film() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    swapi.get('/films').then((response) => {
      setMovies(response.data.results);

      console.log(movies);
    });
  }, []);

  return (
    <Container>
      <Body>
        <Avatar />
        <Content>
          {movies?.map((movie, index) => (
            <div key={movie.index}>
              <Header>
                <strong>{movie.title}</strong>
                <span>{movie.director}</span>
                <Dot />
                <time>{movie.release_date}</time>
              </Header>
              <Description>{movie.opening_crawl}</Description>
              <ImageContent />
            </div>
          ))}

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
  );
}

export default Film;
