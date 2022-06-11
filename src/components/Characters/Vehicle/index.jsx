import React, { useEffect, useState, useCallback } from 'react';
import { getUrlId } from '../../../utils/getUrlId';
import { swapi } from '../../../services/api';
import { RiLoader2Line } from 'react-icons/ri';
import {TbNumber1, TbNumber2, TbNumber3, TbNumber4} from 'react-icons/tb';
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

function Vehicle() {
  const [vehicles, setVehicles] = useState();
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await swapi.get(`vehicles/?page=${page}`);
      const returnedData = await response.data;

      setVehicles(returnedData.results);
      console.log(returnedData);
    } catch{} finally{
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() =>{
    setIsLoading(true);
    getData();
  }, [getData])


  return (
    <>
    <Pagination>
  {/* {page === 1 ? (
    <div/>
  ) : (
    <PaginationButton onClick={() => setPage(page - 1)}>Anterior</PaginationButton>
  )} */}
  {page <= 4 ? (
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
    <PaginationButton
      isActive={page ===4}
      onClick={() => setPage(4)}
      >
    <TbNumber4/>
    </PaginationButton>
    </>
  ) : (
    <>
    <PaginationButton onClick={() => setPage(page -1 )}>
    {page - 1}
    </PaginationButton>
    <PaginationButton isActive>{page}</PaginationButton>    
      {vehicles?.next && (
        <PaginationButton onClick={() => setPage(page + 1)}>
          {page + 1}
        </PaginationButton>
      )}   
    </>    
  )}

  {!vehicles?.next ? (
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
        {vehicles?.map((vehicle, index) => (
          <Container>
          <Body>
            <Content>
              <Avatar
                key={index}
                id={vehicle.id}
                src={`https://starwars-visualguide.com/assets/img/vehicles/${getUrlId(
                  vehicle.url,
                )}.jpg`}
              />
              <Header>
                <strong>{vehicle.name}</strong>
                <Dot />
              </Header>
              <CardInfo>
                <Description>
                  <ImageContent
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${getUrlId(
                      vehicle.url,
                    )}.jpg`}
                  />
                </Description>
                <ListInfo>
                  <p>
                    Model: <span>{vehicle.model}</span>
                  </p>

                  <p>
                    Passangers: <span>{vehicle.passengers}</span>
                  </p>

                  <p>
                     Length: <span>{vehicle.length}</span>
                  </p>

                  <p>
                      Crew: <span>{vehicle.crew}</span>
                  </p>

                  <p>
                    Value: <span>{vehicle.cost_in_credits}</span>
                  </p>

                  <p>
                    Capacity <span>{vehicle.cargo_capacity}</span>
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
  )
}

export default Vehicle;