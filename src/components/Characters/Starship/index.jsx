import React, { useEffect, useState, useCallback } from 'react';

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
  CardInfo,
  ListInfo,
} from './styles';

function Starship() {
  const [starships, setStarships] = useState();
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
          {starships?.map((starship, index) => (
            <Container>
              <Body>
                <Content>
                  <Avatar
                    key={index}
                    src={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(
                      starship.url
                    )}.jpg`}
                  />
                  <Header>
                    <strong>{starship.name}</strong>
                    <Dot />
                  </Header>
                  <CardInfo>
                    <Description>
                      <ImageContent
                        src={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(
                          starship.url
                        )}.jpg`}
                      />
                    </Description>
                    <ListInfo>
                      <p>
                        Model: <span>{starship.model}</span>
                      </p>

                      <p>
                        Passangers: <span>{starship.passengers}</span>
                      </p>

                      <p>
                        Length: <span>{starship.length}</span>
                      </p>

                      <p>
                        Crew: <span>{starship.crew}</span>
                      </p>

                      <p>
                        Value: <span>{starship.cost_in_credits}</span>
                      </p>

                      <p>
                        Capacity <span>{starship.cargo_capacity}</span>
                      </p>
                    </ListInfo>
                  </CardInfo>
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

export default Starship;
