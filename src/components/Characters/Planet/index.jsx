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
  LoadingDiv,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  CardInfo,
  ListInfo,
} from './styles';

function Planet() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get('/planets/');
      const returnedData = await response.data;

      setPlanets(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
      console.log('fim');
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
          {planets?.map((planet, index) => (
            <Container>
              <Body>
                <Content>
                  <Avatar
                    key={index}
                    src={`https://starwars-visualguide.com/assets/img/planets/${getUrlId(
                      planet.url
                    )}.jpg`}
                  />
                  <Header />
                  <strong id={getUrlId(planet.url)}>{planet.name}</strong>

                  <Header />
                  <CardInfo>
                    <Description>
                      <ImageContent
                        src={`https://starwars-visualguide.com/assets/img/planets/${getUrlId(
                          planet.url
                        )}.jpg`}
                      />
                    </Description>
                    <ListInfo>
                      <p>
                        Climated: <span>{planet.climate}</span>
                      </p>

                      <p>
                        Terrain: <span>{planet.terrain}</span>
                      </p>

                      <p>
                        Diameter: <span>{planet.diameter} cm</span>
                      </p>

                      <p>
                        Population: <span>{planet.population}</span>
                      </p>

                      <p>
                        Gravity <span>{planet.gravity}</span>
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

export default Planet;
