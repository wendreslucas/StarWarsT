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

function Character() {
  const [characters, setCharacters] = useState();

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
          {characters?.map((character, index) => (
            <Container>
              <Body>
                <Content>
                  <Avatar
                    key={index}
                    id={Character.id}
                    src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                      character.url
                    )}.jpg`}
                  />
                  <Header>
                    <strong>{character.name}</strong>
                    <Dot />
                  </Header>
                  <CardInfo>
                    <Description>
                      <ImageContent
                        src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                          character.url
                        )}.jpg`}
                      />
                    </Description>
                    <ListInfo>
                      <p>
                        Nascimento: <span>{character?.birth_year}</span>
                      </p>

                      <p>
                        Gênero: <span>{character?.gender}</span>
                      </p>

                      <p>
                        Altura: <span>{character?.height} cm</span>
                      </p>

                      <p>
                        Peso: <span>{character?.mass} kg</span>
                      </p>

                      <p>
                        Cor da pele: <span>{character?.skin_color}</span>
                      </p>

                      <p>
                        Cor dos olhos: <span>{character?.eye_color}</span>
                      </p>

                      <p>
                        Cor do cabelo: <span>{character?.hair_color}</span>
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

export default Character;
