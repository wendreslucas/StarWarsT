import React, { useEffect, useState, useCallback } from 'react';
import { getUrlId } from '../../../utils/getUrlId';
import { swapi } from '../../../services/api';
import { RiLoader2Line } from 'react-icons/ri';
import {TbNumber1, TbNumber2, TbNumber3} from 'react-icons/tb';
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
  Pagination,
  PaginationButton
} from './styles';

function Character() {
  const [characters, setCharacters] = useState();
  const [page, setPage] = useState(2)
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get(`people/?page=${page}`);
      const returnedData = await response.data;

      setCharacters(returnedData.results);
      console.log(returnedData);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);

  return (
    <>
<Pagination>
  {/* {page === 1 ? (
    <div/>
  ) : (
    <PaginationButton onClick={() => setPage(page - 1)}>Anterior</PaginationButton>
  )} */}
  {page < 3 ? (
    <>
    <PaginationButton
      isActive={page ===1}
      onClick={() => setPage(1)}
    >
    <TbNumber1/>
      </PaginationButton>
    <PaginationButton
      isActive={page ===2}
      onClick={() => setPage(2)}
      >
    <TbNumber2/>
    </PaginationButton>
    <PaginationButton
      isActive={page ===3}
      onClick={() => setPage(3)}
      >
    <TbNumber3/>
    </PaginationButton>
    </>
  ) : (
    <>
    <PaginationButton onClick={() => setPage(page -1 )}>
    {page - 1}
    </PaginationButton>
    <PaginationButton isActive>{page}</PaginationButton>    
      {characters?.next && (
        <PaginationButton onClick={() => setPage(page + 1)}>
          {page + 1}
        </PaginationButton>
      )}   
    </>    
  )}

  {!characters?.next ? (
    <div/>
  ) : (
    <PaginationButton onClick={() => setPage(page + 1)}>Próximo</PaginationButton>
  )}
</Pagination>
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
