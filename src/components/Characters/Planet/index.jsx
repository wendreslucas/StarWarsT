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
  Pagination,
  PaginationButton
} from './styles';

function Planet() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2)

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get(`/planets/?page=${page}`);
      const returnedData = await response.data;

      setPlanets(returnedData.results);
      console.log(returnedData);
    } catch {
    } finally {
      setIsLoading(false);
      console.log('fim');
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
  )} */}
  {/* <PaginationButton onClick={() => setPage(page - 1)}>Anterior</PaginationButton> */}
  {page <= 6 ? (
    <>
    <PaginationButton
      isActive={page ===1}
      onClick={() => setPage(1)}
    >
   1
      </PaginationButton>
    <PaginationButton
      isActive={page ===2}
      onClick={() => setPage(2)}
      >
    2
    </PaginationButton>
    <PaginationButton
      isActive={page ===3}
      onClick={() => setPage(3)}
      >
    3
    </PaginationButton>
    <PaginationButton
      isActive={page ===4}
      onClick={() => setPage(4)}
    >
      4
    </PaginationButton>
    <PaginationButton
      isActive={page ===5}
      onClick={() => setPage(5)}
    >
      5
    </PaginationButton>
    <PaginationButton
      isActive={page ===6}
      onClick={() => setPage(6)}
    >
      6
    </PaginationButton>
    </>
  ) : (
    <>
    <PaginationButton onClick={() => setPage(page -1 )}>
    {page - 1}
    </PaginationButton>
    <PaginationButton isActive>{page}</PaginationButton>    
      {planets?.next && (
        <PaginationButton onClick={() => setPage(page + 1)}>
          {page + 1}
        </PaginationButton>
      )}   
    </>    
  )}

  {!planets?.next ? (
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
